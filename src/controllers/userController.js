const userModel=require('../models/userModel')

const createUser= async function(req,res){
    let data=req.body
    let userDetails= await userModel.create(data)
    res.send({msg: userDetails})

}

module.exports.createUser=createUser