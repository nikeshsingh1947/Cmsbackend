require("dotenv").config();
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
module.exports = () => {

  return mongoose.connect(
    `mongodb+srv://cmsnikesh:${process.env.MDB_PASSWRD}@cluster0.cxsjxd9.mongodb.net/user?retryWrites=true&w=majority`
  );
};
// mongodb+srv://cmsnikesh:Cmsnikesh1234567890@cluster0.cxsjxd9.mongodb.net/user?retryWrites=true&w=majority
