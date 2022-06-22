const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
      enum: ["user", "place_owner", "admin"],
      // somavutey@gmail.com
      //chanheng@.com
    },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("users", userSchema);
module.exports = User;
