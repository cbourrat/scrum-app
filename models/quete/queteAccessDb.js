var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
var queteModel = require('./queteModel');
var Quetes = mongoose.model('quetes');

var queteAccessDb = {

	// Creation d'une quête
	create: function(datas, callback) {
		Quetes.create({
            numero: datas.numero,
            domaine: datas.domaine,
            story: datas.story
		}
		.then((quete,err) => {
			if(err) {
				callback(false, err);
			} else {
				if (quete != null) {
					callback(true, null);
				} else {
					callback(false, err);
				}
			}
		}));
	},
	// Recherche de toutes les quêtes
	search: function(callback) {
		Quetes.find().exec()
		.then((quetes, err) => {
			if(err) {
				callback(null, err);
			} else {
				if (quetes != null) {
					callback(quetes, err);
				} else {
					callback(null, err);
				}
			}
		})
		.catch( (error) => {
			res.status(500).send(error);
		});
	}

	
}

module.exports = queteAccessDb;