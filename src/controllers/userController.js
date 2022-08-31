const jwt = require("jsonwebtoken");
const { relativeTimeRounding } = require("moment");
const userModel = require("../models/userModel");


const createUser = async function (req, res) {

  let data = req.body;
  let savedData = await userModel.create(data);
  res.send({ msg: savedData });
};

const loginUser = async function (req, res) {

  let emailId = req.body.emailId;
  let password = req.body.password
  let savedData = await userModel.findOne({ emailId: emailId, password: password });
  if (!savedData) return res.send({ status: false, msg: 'credentials not valid' })
  let token = jwt.sign(
    {
      userId: savedData._id.toString(),
      batch: "plutonium",
      organisation: "Function-up"

    },
    'SAmSIM-Sr5slt178');
  console.log(token)

  res.status(200).send({ status: true, msg: token })

}

const getUser = async function (req, res) {
  let userId = req.params.userId
  let savedData = await userModel.findById(userId);
  if (!savedData) return res.status(404).send({ status: false, msg: "UserId not found" })
  res.status(200).send({ msg: savedData })

}

const updateUser = async function (req, res) {
  try{

    let userDetails = req.body
    let userId = req.params.userId
    let user = await userModel.findOneAndUpdate({_id:userId}, userDetails)
    res.send({ msg: user })
  }
  catch(err){
    return res.status(500).send({status: false, msg: err.message})
  }
}

const deletetUser = async function(req,res){
  let userId = req.params.userId
  let users = await userModel.findOneAndDelete({_id:userId},{isDeleted:true})
  res.send({msg: users})
}




module.exports.createUser = createUser;
module.exports.getUser = getUser;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deletetUser=deletetUser
