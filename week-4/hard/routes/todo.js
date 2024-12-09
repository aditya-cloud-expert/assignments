const { Router } = require("express");
const adminMiddleware = require("../middleware/user");
const todorouter = Router();
const { Todo } = require("../database/index")

// todo Routes
todorouter.post('/', (req, res) => {
    // Implement todo creation logic
});

todorouter.put('/', adminMiddleware, (req, res) => {
    // Implement update todo  logic
});

todorouter.delete('/', adminMiddleware, (req, res) => {
    // Implement delete todo logic
});

todorouter.delete('/:id', adminMiddleware, (req, res) => {
    // Implement delete todo by id logic
});


todorouter.get('/', adminMiddleware, (req, res) => {
    // Implement fetching all todo logic
});

todorouter.get('/:id', adminMiddleware, (req, res) => {
    // Implement fetching todo by id logic
});

module.exports = { todorouter }