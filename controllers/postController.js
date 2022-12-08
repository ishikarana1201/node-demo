const Post = require("../models/Posts");
const jwt = require("jsonwebtoken");

exports.addPost = async (req, res) => {
  const token = req.headers.authorization.split(" ")[1];

  const data = jwt.verify(token, "ASDF");
  req.body.userId = data.id;

  const newPost = await Post.create(req.body);
  res.status(401).json({
    status: "success",
    data: {
      post: newPost,
    },
  });
};

exports.getAllPosts = async (req, res) => {
  const posts = await Post.find();
  res.status(401).json({
    status: "success",
    data: {
      post: posts,
    },
  });
};

exports.deletePost = async (req, res) => {
  const deletePost = await Post.findByIdAndDelete(req.params.id);
  res.status(401).json({
    status: "success",
    data: {
      message: "Data is deleted",
    },
  });
};

exports.getSinglePost = async (req, res) => {
  const singlePost = await Post.findById(req.params.id);
  res.status(401).json({
    status: "success",
    data: {
      post: singlePost,
    },
  });
};

exports.updatePost = async (req, res) => {
  const updatePost = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(401).json({
    status: "success",
    data: {
      post: updatePost,
    },
  });
};
