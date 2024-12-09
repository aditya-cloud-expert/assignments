const express = require('express');
const app = express();

function logRequests(req, res, next) {
    // Get timestamp in the required format
    const timestamp = new Date().toISOString();
    
    // Log in the specific format: "METHOD /path - timestamp"
    console.log(`${req.method} ${req.url} - ${timestamp}`);
    
    next();
}

app.use(logRequests);

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello, world!' });
});

module.exports = app;