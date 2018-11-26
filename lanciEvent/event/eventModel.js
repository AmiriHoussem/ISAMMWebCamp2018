var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var eventSchema = new Schema({
	'name' : String,
	'date' : Date,
	'participant' : Array,
	'description' : String,
	'coverphoto' : String,
	'posts' : Array,
	'title' : String,
    'start': Date,
    'end': Date
});

module.exports = mongoose.model('event', eventSchema);
