const mongoose = require("mongoose");
const User = require("./userModel");
const postSchema = mongoose.Schema({
  title: {
    type: String,
    unique: true,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: User,
  },
});
const Post = mongoose.model("posts", postSchema);

module.exports = Post;
