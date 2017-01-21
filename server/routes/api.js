const express = require('express');
const router = express.Router();

var queteAccessDb = require('../../models/quete/queteAccessDb');

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


module.exports = router;