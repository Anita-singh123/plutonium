const express = require('express');
const logger=require('../logger/logger.js')
const router = express.Router();
const util = require('../util/helper.js')
const validator = require('../validator/formatter.js')

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});


router.get('/test-me1',logger.welcome )
router.get('/test-me2', function(req,res){
    util.date()
    util.month()
    util.getBatchInfo()
    res.send("my api")
})

router.get('/test-me3',function(req,res){
    validator.trim()
    validator.lowerCase()
    validator.UpperCase()
    res.send("my api2 ")
})



module.exports = router;
// adding this comment for no reason