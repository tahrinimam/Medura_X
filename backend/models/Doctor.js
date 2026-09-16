const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: String,
  specialization: String,
  email: String,
  dailyLimit: {
    type: Number,
    default: 20
  },
  available: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model("Doctor", doctorSchema);
