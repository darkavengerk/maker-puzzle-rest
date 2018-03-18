'use strict';

const co = require('co');
const router = require('express').Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');
const Project = mongoose.model('Project');
// const async = require('async');

// Find All
router.get('/', (req, res) => {
	console.log('Start 1');
	(async function() {		
		const users = await User.find({});
		const projects = await Project.find({});
	})();

	res.status(200).send('Ok');
  // Portfolio.find({})
  //   .then((result) => {
  //     res.json(result);
  //   })
  //   .catch(err => res.status(500).send(err));

});

router.post('/csv/', (req, res) => {

  Portfolio.create(req.body)
    .then(result => res.send(result))
    .catch(err => {
			console.log(err);
			res.status(500).send(err)
		});
});

router.post('/', (req, res) => {

	var portfolio = req.body;

	co(function* () {
		let getDocs = [User.findOne({uid:portfolio.uid}), Project.findOne({pid:portfolio.pid})];
		let [user, project] = yield Promise.all(getDocs);

		let updates = [
			User.update({uid:portfolio.uid}, {$addToSet:{portfolios:portfolio, projects:project._id}}), 
			Project.update({pid:portfolio.pid}, {$addToSet:{portfolios:portfolio, users:user._id}})
		];
		yield Promise.all(updates);
		res.send('ok');
			
	}).catch(e => res.status(500).send(e));
});

router.get('/clean', (req, res) => {

	co(function* () {

		let [r1, r2] = yield Promise.all([
			User.update({}, {$set:{portfolios:[], projects:[]}}, {multi:true}), 
			Project.update({}, {$set:{portfolios:[], users:[]}}, {multi:true})
		]);

		console.log(r1, r2);
		res.send('ok2');
		
	}).catch(e => res.status(500).send(e));
});


module.exports = router;