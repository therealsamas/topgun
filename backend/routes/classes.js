const express = require('express');
const router = express.Router();
const passport = require('passport');



const classescontroller = require('../controller/classescontroller.js');

// router.get('/', classescontroller.js.page);
router.get('/get',classescontroller.getclass);
router.get('/create',classescontroller.getclass);
console.log("router is working");

module.exports = router;