const express = require('express');
const router = express.Router();
const passport = require('passport');


router.use('/classes',require('./classes'));
// router.use('/user',require('./user'));	
// router.use('/get_apis', require('./get_apis'));	

console.log("router is working");

module.exports = router;