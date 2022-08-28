const productModel= require("../models/productModel")
const userModel=require("../models/userModel")
const orderModel= require("../models/orderModel")
 const createOrder= async function (req, res) {
    let data = req.body 
    let userdata= await userModel.findById(data.userId)
    if(!userdata)
     return res.send({msg: "user not found"})


     let productdata= await productModel.findById(data.productId)
     if(!productdata)
      return res.send({msg: "product not found"})
      if(userdata.balance< productdata.amount){
        return res.send({msg: "insufficient balance"})
      }
    if(req.headers.isFreeAppUser)
    data["amount"]=0
    else
    data["amount"]=productdata.price
    data["isFreeAppUser"]=req.isFreeAppUser
    data["date"]=Date.now()
    await userModel.updateOne({
        _id:data.userId
    },{$inc:{balance:-productdata["amount"]},isFreeAppUser:req.isFreeAppUser}
        
    )
    let orderDetails= await orderModel.create(data)
    res.send({msg: orderDetails})
 }

 module.exports.createOrder= createOrder
