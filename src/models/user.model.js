const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema(
  { name:{type:String, required:true},
    email: { type: String, required: true, unique: true },
    mobileNumber:{type:Number,requred:true},
    CompanyName:{type:String,required:true}
  },
  {
    timestamps: true,
    versionKey: false,
  }

  
); 



const User = mongoose.model("User", userSchema);
module.exports = User;