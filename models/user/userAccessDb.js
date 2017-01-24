var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
var quserModel = require('./userModel');
var Users = mongoose.model('users');

var userAccessDb = {

	// Creation d'une quête
	create: function(datas, callback) {
		Users.create({
            id: datas.id,
            username: datas.username,
            password: datas.password,
            firstName: datas.firstName,
            lastName: datas.lastName
        })
		.then((user,err) => {
			if(err) {
				callback(false, err);
			} else {
				if (user != null) {
					callback(true, null);
				} else {
					callback(false, err);
				}
			}
		})
        .catch( (error) => {
			res.status(500).send(error);
        });
	},
	// Recherche de tous les users
	authenticate: function(datas, callback) {
         // find the user
        Users.findOne({
            username: datas.username
        })
        .then((user, err) => {
            if (err) throw err;

            if (!user) {
                callback({ 
                    success: false, 
                    message: 'Authentication failed. User not found.' 
                });
            } else if (user) {

                // check if password matches
                if (user.password != datas.password) {
                    callback({ 
                        success: false, 
                        message: 'Authentication failed. Wrong password.' });
                } else {

                    // if user is found and password is right
                    // create a token
                    var token = jwt.sign(user, app.get('superSecret'), {
                        expiresInMinutes: 1440 // expires in 24 hours
                    });

                    // return the information including token as JSON
                    callback({
                        success: true,
                        message: 'Enjoy your token!',
                        token: token
                    });
                }
            }
        })
        .catch( (error) => {
            callback({
                success: false,
                message: error,
                catch: true
            })
        });
    }

    

	
}

module.exports = userAccessDb;