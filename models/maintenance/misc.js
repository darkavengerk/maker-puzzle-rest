const mongoose = require('mongoose');

// Define Schemes
const schema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  content: { type: String, required: true},
});

// Create Model & Export
module.exports = mongoose.model('Misc', schema);
