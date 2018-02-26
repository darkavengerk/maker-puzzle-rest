const mongoose = require('mongoose');

// Define Schemes
const schema = new mongoose.Schema({
  uid: { type: Number, required: true, unique: true },
  email: { type: String, required: true, unique: true},
  nmKor: String,
  nmEng: String,
  majority: String,
  career: Number,
  contacts: String,
  location: String
},
{
  timestamps: true
});

// Create Model & Export
module.exports = mongoose.model('User', schema);
