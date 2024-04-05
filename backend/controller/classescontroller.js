const User = require('../models/user');
const Class = require('../models/classes');
const mongoose = require('mongoose');
const CryptoJS = require('crypto-js');
require('dotenv').config();




module.exports.createclass = async function(req,res){
	try{
		const newclass = await Class.create(req.body);
		return res.status(200).json({
			message: "class created succesfully"
		});

	}catch(error){
		console.error(error);
	}
}

module.exports.getclass = async function(req,res){
	try{
		const reqid = req.classid;
		const class1 = await Class.findById(reqid);
		return res.status(200).json({
			reqobj:class1
		});
	}catch(error){
		console.error(error);
	}
}