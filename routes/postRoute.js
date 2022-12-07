const express = require("express");
const {
  addPost,
  getAllPosts,
  deletePost,
  getSinglePost,
  updatePost,
} = require("../controllers/postController");

const router = express.Router();

router.route("/").post(addPost).get(getAllPosts);
router.route("/:id").delete(deletePost).get(getSinglePost).patch(updatePost);
module.exports = router;
