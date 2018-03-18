'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

// Define Schemes
const schema = new mongoose.Schema({
  cid: { type: Number, required: true, unique: true, index: true},
  workType: String,
  nmKor: String,
  nmEng: String,
  location: String,
  homepage: String,
  telephone: String,
  capacity: String,
  profileImage: Number,
  backImage: Number,
  hash: [String],
  isConfirm: Boolean,
  projects: [{type: ObjectId, ref: 'Project'}],
  users: [{type: ObjectId, ref: 'User'}],
  images: [{
    rid: Number
  }]
},
{
  timestamps: false
});

// Create Model & Export
module.exports = mongoose.model('Company', schema);