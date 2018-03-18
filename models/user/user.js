'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

var Portfolio = require('../document/portfolio');

// Define Schemes
const schema = new mongoose.Schema({
  uid: { type: Number, required: true, unique: true, index: true},
  email: { type: String, required: true, unique: true},
  nmKor: String,
  nmEng: String,
  majority: String,
  career: Number,
  contacts: String,
  location: String,
  userImage: Number,
  backImage: Number,
  skills: [{
  		name: String,
  		level: Number
  }],
  roles: [String],
  hash: [String],
  companies : [{type: ObjectId, ref: 'Company'}],
  projects : [{type: ObjectId, ref: 'Project'}],
  portfolios : [Portfolio]
},
{
  timestamps: true
});

// Create Model & Export
module.exports = mongoose.model('User', schema);