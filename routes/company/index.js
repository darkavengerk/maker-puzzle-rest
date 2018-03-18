'use strict';

const router = require('express').Router();
const mongoose = require('mongoose');
const Company = mongoose.model('Company');

// Find All
router.get('/', (req, res) => {
  Company.find({})
    .then((result) => {
      res.json(result);
    })
    .catch(err => res.status(500).send(err));
});

router.post('/csv/', (req, res) => {

  Company.create(req.body)
    .then(result => res.send(result))
    .catch(err => {
			console.log(err);
			res.status(500).send(err)
		});
});


module.exports = router;