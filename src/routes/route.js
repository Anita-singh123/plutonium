const express= require('express')
const router= express.Router();
const UserModel = require('../models/userModels')
const userController= require('../controllers/userController')

router.get('/test-me', function (req,res){
    res.send("my first ever api!")

});

router.post('/createUser', userController.createUser )

router.get('/getUserData', userController.getUserData)

module.exports=router;