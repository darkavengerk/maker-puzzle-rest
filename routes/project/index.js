'use strict';

const router = require('express').Router();
const mongoose = require('mongoose');
const Project = mongoose.model('Project');

// Find All
router.get('/', (req, res) => {
  Project.find({})
    .then((result) => {
      res.json(result);
    })
    .catch(err => res.status(500).send(err));
});

router.post('/csv/', (req, res) => {

	console.log(req.body);
  Project.create(req.body)
    .then(result => res.send(result))
    .catch(err => {
			console.log(err);
			res.status(500).send(err)
		});
});

router.post('/:pid', (req, res) => {

	var pid = req.params.pid;

	Project.update({pid:pid}, req.body)
		.then(result => res.send(result))
    .catch(err => {
			console.log(err);
			res.status(500).send(err)
		});
});


module.exports = router;