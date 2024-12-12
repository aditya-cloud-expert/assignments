const express = require('express')
const app = express()
const dotenv = require('dotenv')
const { userRouter } = require("./routes/user")
const { blogRouter } = require("./routes/blog")
const { commentRouter } = require("./routes/comment")
 
dotenv.config()

app.use(express.json())
app.use("/user", userRouter)
app.use("/blog", blogRouter)
app.use("/comment", commentRouter)

app.listen(process.env.PORT || 3000)