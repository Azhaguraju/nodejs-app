const mongoose = require("../db");
const schema = new mongoose.Schema(
  {
    name: {
      desc: "The emmployee's name.",
      trim: true,
      type: String,
      required: true,
    },      
    email: {
      desc: "The emmployee's email address.",
      trim: true,
      type: String,
      index: true,
      unique: true,
      required: true,
    },    
    phoneno: {
      desc: "The emmployee's age.",
      type: Number,
    },
    gender: {
      desc: "emmployee gender.",
      trim: true,
      type: String,
      enum: ["Male", "Female", "Others"],
      default: "Others",
      required: true,
    }    
  },
  {
    strict: true,
    versionKey: false,
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
  }
);

module.exports = mongoose.model("Users", schema);
