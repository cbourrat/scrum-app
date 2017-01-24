const express = require('express');
const router = express.Router();

var queteAccessDb = require('../../models/quete/queteAccessDb');
var userAccessDb = require('../../models/user/userAccessDb');

// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

/* GET api listing. */
router.get('/quete', (req, res, next) => {

    queteAccessDb.search( (result, err) => {
			if(!err) {
				res.send(result).status(200);
			} else {
				console.log(err + " (erreur api.js)");
				res.send(err).status(404);
			}
	});

});

router.get('/users', (req, res, next) => {
    userAccessDb.search( (result, err) => {
			if(!err) {
				res.send(result).status(200);
			} else {
				console.log(err + " (erreur api.js)");
				res.send(err).status(404);
			}
	});

});

router.post('/users', (req, res, next) => {
	console.log("in api create user");
	userAccessDb.create(req.body, (result, err) => {
		if(!err) {
			res.send(result).status(200);
		} else {
			console.log(err + " (erreur insert user)");
			res.send(err).status(404);
		}
	});

});

router.post('/authenticate', (req, res, next) => {
	userAccessDb.authenticate(req.body, (result) => {
		if(result.success) {
			res.send(result).status(200);
		} else {
			if (result.catch) {
				res.send(result.message).status(500);
			} else {
				res.send(result.message).status(404);
			}
		}
	});

});



module.exports = router;