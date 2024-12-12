const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const { User } = require('../Database/mongodb'); // Assuming you have a User model defined
const validate = require('../middleware/validate');

dotenv.config();
const router = express.Router();

async function signin(req, res) {
    try {
        // Validate the request body
        validate(req.body);

        const { email, password } = req.body;

        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        // Compare passwords
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials",
            });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });

        res.status(200).json({
            success: true,
            message: "Signin successful",
            token,
        });
    } catch (error) {
        console.error("Error during signin:", error);
        res.status(400).json({
            success: false,
            message: error.message || "An error occurred during signin",
        });
    }
}

async function signup(req, res) {
    try {
        // Validate the request body
        validate(req.body);

        const { email, password } = req.body;

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists with this email",
            });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({
            email,
            password: hashedPassword,
        });

        // Save the user to the database
        await newUser.save();

        res.status(201).json({
            success: true,
            message: "User registered successfully",
        });
    } catch (error) {
        console.error("Error during signup:", error);
        res.status(400).json({
            success: false,
            message: error.message || "An error occurred during signup",
        });
    }
}

// Define routes
router.post("/signin", signin);
router.post("/signup", signup);

// Correctly export the router
module.exports = {
    userRouter: router,
};
