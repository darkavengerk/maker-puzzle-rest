'use strict';

const router = require('express').Router();
const mongoose = require('mongoose');
const model = mongoose.model('Misc');

router.get('/:title', (req, res) => {
  model.findOne({title:req.params.title}, {_id:false})
    .then((result) => {
      res.json(result);
    })
    .catch(err => res.status(500).send(err));
});

router.post('/', (req, res) => {
  model.create(req.body)
    .then(result => res.send(result))
    .catch(err => res.status(500).send(err));
});

router.put('/:title', (req, res) => {
  model.update({title:req.params.title}, req.body)
    .then(result => res.send(result))
    .catch(err => res.status(500).send(err));
});

module.exports = router;