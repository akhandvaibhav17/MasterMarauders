const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
    userName: { type: String, required: true, unique: true },
    password: { type: String, required: true }
})

const Register = new mongoose.model("Register", playerSchema);
module.exports = Register;