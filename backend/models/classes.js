const mongoose = require('mongoose');


const ClassSchema = new mongoose.Schema({
	courseCode:{
		type: String,
		required:true
	},
	courseName:{
		type: String,
		required:true
	},
	courseType:{
		type: String,
		required:true
	},
	year:{
		type: String,
		required:true
	},
	semester:{
		type: String,
		required:true
	},
	department:{
		type: String,
		required:true
	},
	electiveType:{
		type: String,
		required:true
	},
	batch:{
		type: String,
		required:true
	},
	teacherName:{
		type: String,
		required:true
	},
	day:{
		type: String,
		required:true
	},
	timeSlot:{
		type: String,
		required:true
	},
	roomName: {
		type: String,
		required: true
	}
});

const Class = mongoose.model('Class',UserSchema);
module.exports = Class;
