const User = require("../models/userModel");

exports.addUser = async (req, res) => {
  const newUser = await User.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      user: newUser,
    },
  });
};

exports.getAllUser = async (req, res) => {
  const user = await User.find();

  res.status(200).json({
    status: "success",
    data: {
      user: user,
    },
  });
};

exports.deleteUser = async (req, res) => {
  const deleteUser = await User.findByIdAndDelete(req.params.id);
  res.status(200).json({
    status: "success",
    data: {
      user: deleteUser,
    },
  });
};

exports.getUserById = async (req, res) => {
  const singleUser = await User.findById(req.params.id);
  res.status(200).json({
    status: "success",
    data: {
      user: singleUser,
    },
  });
};

exports.updateUser = async (req, res) => {
  const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json({
    status: "success",
    data: {
      user: updateUser,
    },
  });
};
