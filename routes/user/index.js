const router = require('express').Router();
const User = require('../../models/user/userSchema');

// Find All
router.get('/', (req, res) => {
  User.find({})
    .then((result) => {
      res.json(result);
    })
    .catch(err => res.status(500).send(err));
});

// Find One by todoid
router.get('/todoid/:todoid', (req, res) => {
  User.findOneByTodoid(req.params.todoid)
    .then((todo) => {
      if (!todo) return res.status(404).send({ err: 'Todo not found' });
      res.send(`findOne successfully: ${todo}`);
    })
    .catch(err => res.status(500).send(err));
});

// Create new todo document
router.post('/', (req, res) => {
  User.create(req.body)
    .then(todo => res.send(todo))
    .catch(err => res.status(500).send(err));
});

// Update by todoid
router.put('/todoid/:todoid', (req, res) => {
  User.updateByTodoid(req.params.todoid, req.body)
    .then(todo => res.send(todo))
    .catch(err => res.status(500).send(err));
});

// Delete by todoid
router.delete('/todoid/:todoid', (req, res) => {
  User.deleteByTodoid(req.params.todoid)
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).send(err));
});

module.exports = router;