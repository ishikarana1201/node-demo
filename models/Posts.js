const mongoose = require("mongoose");

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
});
const Post = mongoose.model("posts", postSchema);

module.exports = Post;
