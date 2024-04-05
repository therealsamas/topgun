const mongoose = require('mongoose');


const TeacherSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	designation: {
		type: String,
		required: true
	},
	department: {
		type: String,
		required: true
	}
});

const Teacher = mongoose.model('Teacher',TeacherSchema);
module.exports = Teacher;
