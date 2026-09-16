const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  userName: String,
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor"
  },
  date: String,
  status: {
    type: String,
    default: "Booked"
  }
});

module.exports = mongoose.model("Appointment", appointmentSchema);
