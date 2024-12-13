const express = require('express');
const { Blog } = require('../Database/mongodb');
const auth = require('../middleware/authentication');

const router = express.Router();
router.use(auth);

// Create a new blog
async function blogcreate(req, res) {
    try {
        const { title, description, imageURL } = req.body;

        if (!title || !description || !imageURL) {
            return res.status(400).send({
                message: "All fields (title, description, imageURL) are required."
            });
        }

        await Blog.create({
            userid: req.user.id, // assuming `req.user` contains the user ID
            title,
            description,
            imageURL
        });

        return res.status(201).send({
            message: "Blog Created Successfully"
        });
    } catch (error) {
        return res.status(500).send({
            message: "Something Went Wrong",
            error: error.message
        });
    }
}

// Edit an existing blog
async function blogedit(req, res) {
    try {
        const { title, newTitle, newDescription, newImageURL } = req.body;
        const userid = req.user.id;

        if (!title || (!newTitle && !newDescription && !newImageURL)) {
            return res.status(400).send({
                message: "Provide the current title and at least one field to update (newTitle, newDescription, newImageURL)."
            });
        }

        const blog = await Blog.findOneAndUpdate(
            { title, userid },
            {
                ...(newTitle && { title: newTitle }),
                ...(newDescription && { description: newDescription }),
                ...(newImageURL && { imageURL: newImageURL })
            },
            { new: true } // returns the updated document
        );

        if (!blog) {
            return res.status(404).send({
                message: "Blog not found or you're not authorized to edit this blog."
            });
        }

        return res.status(200).send({
            message: "Blog updated successfully",
            blog
        });
    } catch (error) {
        return res.status(500).send({
            message: "Something Went Wrong",
            error: error.message
        });
    }
}

// Delete a blog
async function blogdelete(req, res) {
    try {
        const { title } = req.body;
        const userid = req.user.id;

        if (!title) {
            return res.status(400).send({
                message: "Title is required to delete a blog."
            });
        }

        const blog = await Blog.findOneAndDelete({
            title,
            userid
        });

        if (!blog) {
            return res.status(404).send({
                message: "Blog not found or you're not authorized to delete this blog."
            });
        }

        return res.status(200).send({
            message: "Blog deleted successfully"
        });
    } catch (error) {
        return res.status(500).send({
            message: "Something Went Wrong",
            error: error.message
        });
    }
}

// Define routes
router.post("/create", blogcreate);
router.put("/edit", blogedit);
router.delete("/delete", blogdelete);

// Export the router
module.exports = {
    blogRouter: router
};
