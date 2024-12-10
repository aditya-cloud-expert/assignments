const jwt = require('jsonwebtoken')
const dotenv = require("dotenv");
dotenv.config();

function userMiddleware(req, res, next) {
    // Implement user auth logic
    try{
        const token = req.headers.token;
        const decoded = jwt.verify(token, process.env.JWT_USER_SECRET);
        if(decoded != null){
            req.body.username = decoded.username
            console.log("middleware " + req.body);
            next()
        }
        else{
            res.status(403).send({
                message : "Wrong Credentials"
            })
            return;
        }

    }
    catch(e)
    {
        res.status(401).send({
            message: "Something Went Wrong"
        })
    }
}

module.exports = userMiddleware;