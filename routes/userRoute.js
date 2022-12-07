const express = require("express");
const {
  addUser,
  getAllUser,
  deleteUser,
  getUserById,
  updateUser,
} = require("../controllers/userController");

const router = express.Router();

router.route("/").post(addUser).get(getAllUser);
router.route("/:id").delete(deleteUser).get(getUserById).put(updateUser);

module.exports = router;
