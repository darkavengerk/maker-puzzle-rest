const mongoose = require('mongoose');

// Define Schemes
const schema = new mongoose.Schema({
  todoid: { type: Number, required: true, unique: true },
  content: { type: String, required: true },
  completed: { type: String, default: false }
},
{
  timestamps: true
});

// Create Model & Export
module.exports = mongoose.model('User', schema);
