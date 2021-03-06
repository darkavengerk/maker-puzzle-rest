'use strict';

const router = require('express').Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');

// Find All
router.get('/', (req, res) => {
  User.find({})
    .then((result) => {
      res.json(result);
    })
    .catch(err => res.status(500).send(err));
});

router.post('/csv/', (req, res) => {

  User.create(req.body)
    .then(result => res.send(result))
    .catch(err => {
			console.log(err);
			res.status(500).send(err)
		});
});


module.exports = router;