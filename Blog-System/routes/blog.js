const express = require('express');
const router = express.Router();

function blogcreate(req, res){

}

function blogedit(req, res){

}

function blogdelete(req, res){
    
}


router.post("/create",blogcreate)
router.put("/edit",blogedit)
router.delete("/delete",blogdelete)

// Correctly export the router
module.exports = {
    blogRouter : router
};
