const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const { todo, use } = require("./routes/todo")
const { user } = require("./routes/user")
const app = express();
const port = process.env.PORT;


app.use(express.json());

app.get("/healthy", (req, res)=> res.send("I am Healthy"));
app.use("/todo", todo)
app.use("/user", user)

//  start writing your routes here

app.listen(port, ()=> console.log(`server is running at http://localhost:${port}`));

