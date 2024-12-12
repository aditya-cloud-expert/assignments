const express = require('express');
const router = express.Router();

function comment(req, res){

}

router.post("/comment",comment)


// Correctly export the router
module.exports = {
    commentRouter : router
};
