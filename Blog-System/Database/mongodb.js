const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

// Connect to the database
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Define the User schema
const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

// Define the Blog schema
const BlogSchema = new mongoose.Schema({
    userid: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    title: { type: String, required: true },
    description: { type: String }, // Fixed incorrect object declaration
    imageURL: { type: String },    // Fixed incorrect object declaration
});

// Define the Comment schema
const CommentSchema = new mongoose.Schema({
    blogid: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Blog' },
    userid: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    comment: { type: String, required: true }, // Fixed typo in "commend" to "comment"
});

// Create models for each schema
const User = mongoose.model('User', UserSchema);
const Blog = mongoose.model('Blog', BlogSchema);
const Comment = mongoose.model('Comment', CommentSchema);

// Export the models
module.exports = {
    User,
    Blog,
    Comment,
};
