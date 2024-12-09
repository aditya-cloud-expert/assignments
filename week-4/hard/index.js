const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const port = process.env.PORT;

const { userrouter } = require("./routes/user");
const { todorouter } = require("./routes/todo");

// Middleware to parse JSON requests
app.use(express.json());

// Use routers for respective routes
app.use("/user", userrouter);
app.use("/todo", todorouter);

// Health check route
app.get("/healthy", (req, res) => res.send("I am Healthy"));

// Start the server
app.listen(port, () => console.log(`Server is running at http://localhost:${port}`));
