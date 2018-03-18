'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
var Portfolio = require('../document/portfolio');

// Define Schemes
const schema = new mongoose.Schema({
  pid: { type: Number, required: true, unique: true, index: true},
  nmKor: String,
  nmEng: String,
  descriptions: String,
  country: String,
  location: String,
  opened: String,
  catagory: String,
  rid: Number,
  isConfirm: Boolean,
  companies: [{type: ObjectId, ref: 'Company'}],
  users: [{type: ObjectId, ref: 'User'}],
  images: [{
      rid: Number
  }],
  portfolios : [Portfolio]
},
{
  timestamps: false
});

// Create Model & Export
module.exports = mongoose.model('Project', schema);