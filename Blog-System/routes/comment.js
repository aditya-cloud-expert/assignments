const express = require('express');
const auth = require('../middleware/authentication')
const { Comment } = require('../Database/mongodb')
const router = express.Router();
router.use(auth);

async function comment(req, res){
    console.log("Hi from comment")
    try {
        const blogid = req.body.blogid
        const userid = req.user.id;
        const comment = req.body.comment;
        await Comment.create({
            userid,
            blogid,
            comment
        }) 

        return res.status(201).send({
            message: "Comment Created Successfully"
        });
    } catch (error) {
        return res.status(500).send({
            message: "Something Went Wrong",
            error: error.message
        });
    }

}

router.post("/create",comment)


// Correctly export the router
module.exports = {
    commentRouter : router
};
