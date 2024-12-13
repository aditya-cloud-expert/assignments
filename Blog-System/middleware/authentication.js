const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

dotenv.config();

function auth(req, res, next) {
    try {
        // Get the token from the Authorization header
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).send({
                message: "Token missing or malformed",
            });
        }

        const token = authHeader.split(" ")[1];

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (!decoded) {
            return res.status(401).send({
                message: "Token expired or invalid",
            });
        }

        // Attach the decoded token data to the request object
        req.user = decoded;
        next();
    } catch (error) {
        console.error("Error in auth middleware:", error);
        res.status(400).send({
            message: "Authentication error",
        });
    }
}

module.exports = auth;
