const User = require("../models/userModel");
const bycrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.addUser = async (req, res) => {
  req.body.password = await bycrypt.hash(req.body.password, 12);
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

exports.login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email }).select(
    "+password"
  );
  const dbPassword = user.password;
  const password = req.body.password;

  const token = jwt.sign({ id: user._id }, "ASDF");

  if (bycrypt.compare(password, dbPassword)) {
    res.status(200).json({
      status: "success",
      token: token,
      data: {
        user: user,
      },
    });
  }
};

exports.protect = async (req, res, next) => {
  // 1) Postman token
  const token = req.headers.authorization.split(" ")[1];

  const data = jwt.verify(token, "ASDF");
  // console.log(final);
  if (data.id) {
    next();
  } else {
    res.send("un");
  }
};
