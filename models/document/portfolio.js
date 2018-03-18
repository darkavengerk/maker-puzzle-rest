'use strict';

const mongoose = require('mongoose');

// Define Schemes
const schema = new mongoose.Schema({

  fid: {type: Number, required: true},
  uid: {type: Number, required: true},
  pid: {type: Number, required: true},
  title: String,
  descriptions: String,
  hash: [String],
  lastUpdateDt: Date
});

// Export to be embedded in User schema.
module.exports = schema;