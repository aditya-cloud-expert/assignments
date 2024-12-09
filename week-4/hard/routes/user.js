const bcrypt = require("bcrypt")
const { Router } = require("express");
const zod = require("zod")
const dotenv = require("dotenv");
const jwt = require('jsonwebtoken')

const userMiddleware = require("../middleware/user");
const { User } = require("../database/index")

const userrouter = Router();
dotenv.config();

// User Routes
const signupSchema = zod.object({
    username: zod.string().min(3, "Username must be at least 3 characters long"),
    email: zod.string().email("Invalid email format"),
    password: zod.string().min(6, "Password must be at least 6 characters long"),
});

userrouter.post('/signup', async (req, res) => {
    try {
        // Validate request body using zod schema
        const validatedData = signupSchema.parse(req.body);

        // Destructure validatedData for use
        const { username, email, password } = validatedData;

        // Hash the password using bcrypt
        const hashedPassword = await bcrypt.hash(password, 10); // Salt rounds: 10

        // Save user data to the database with the hashed password
        await User.create({
            username,
            email,
            password: hashedPassword,
        });

        // Respond to the client
        res.status(200).json({
            message: "Signup successful",
        });
    } catch (error) {
        if (error instanceof zod.ZodError) {
            // Send validation error messages as response
            res.status(400).json({
                message: "Validation error",
                errors: error.errors,
            });
        } else {
            console.error("Unexpected Error:", error);
            res.status(500).json({
                message: "An unexpected error occurred",
            });
        }
    }
});


userrouter.post('/login', async (req, res) => {
    try {
        const loginSchema = zod.object({
            username: zod.string(),
            password: zod.string()
        });
 
        const { username, password } = loginSchema.parse(req.body);
        const user = await User.findOne({ username });
 
        if (!user) {
            return res.status(403).json({ message: "Invalid credentials" });
        }
 
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(403).json({ message: "Invalid credentials" });
        }
 
        const token = jwt.sign({ username: user.username }, process.env.JWT_USER_SECRET);
        res.status(200).json({ token });
 
    } catch (error) {
        if (error instanceof zod.ZodError) {
            res.status(400).json({
                message: "Validation error",
                errors: error.errors
            });
        } else {
            console.error("Error:", error);
            res.status(500).json({ message: "An unexpected error occurred" });
        }
    }
 });

userrouter.get('/todos', userMiddleware, (req, res) => {
    // Implement logic for getting todos for a user
});

userrouter.post('/logout', userMiddleware, (req, res) => {
    // Implement logout logic
});

module.exports = { userrouter }