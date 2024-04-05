const User = require('../models/user');
const Teacher = require('../models/teachers');
const mongoose = require('mongoose');
const CryptoJS = require('crypto-js');
require('dotenv').config();




module.exports.createteacher = async function(req,res){
	try{
		const newclass = await Teacher.create(req.body);
		return res.status(200).json({
			message: "class created succesfully"
		});

	}catch(error){
		console.error(error);
	}
}

module.exports.getteacher = async function(req,res){
	try{
		const reqid = req.classid;
		const teacher1 = await Teacher.findById(reqid);
		return res.status(200).json({
			reqobj:teacher1
		});
	}catch(error){
		console.error(error);
	}
}