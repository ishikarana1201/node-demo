const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

app.use(express.json());

// Route
const userRoute = require("./routes/userRoute");
app.use("/users", userRoute);

const postRoute = require("./routes/postRoute");
app.use("/posts", postRoute);
mongoose
  .connect("mongodb://localhost:27017/node-basic", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((con = console.log("Database connection successfull")));

// console.log(process.env);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
