// Mongoose
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var Schema = mongoose.Schema;

var queteSchema = new Schema({
  numero: Number,
  domaine: String,
  sousDomaine: String,
  story: String,
  detail: String,
  point: Number,
  ordre: Number,
  moscow: String,
  etat: String,
  release: String,
  xp: Number
});



var Quetes = mongoose.model('quetes', queteSchema);
module.exports = Quetes;