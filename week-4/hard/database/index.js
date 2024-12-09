const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/todo-app-database');

// Define schemas

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username : { type: String, required: true, unique : true},
    email: { type: String, required: true },
    password: { type: String , required: true }

});

const TodoSchema = new mongoose.Schema({
    // Schema definition here
    description : { type: String , required: true },
    isDone : { type: Boolean },
    username : {type: String }
});

const User = mongoose.model('User', UserSchema);
const Todo = mongoose.model('Todo', TodoSchema);

module.exports = {
    User,
    Todo
}