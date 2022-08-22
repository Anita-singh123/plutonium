
const userModel= require('../models/userModels')
const createUser= async function (req,res){

    let data = req.body
     let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUserData=async function (req,res){
    let allusers= await UserModel.find()
    res.send({msg: allusers})

}

module.exports.createUser=createUser
module.exports.getUserData=getUserData