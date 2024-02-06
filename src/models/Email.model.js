const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const emailSchema = mongoose.Schema(
  { 
    email: { type: String, required: true, unique: true }
  },
  {
    timestamps: true,
    versionKey: false,
  }

  
); 

const User = mongoose.model("Email", userSchema);
module.exports = Email;