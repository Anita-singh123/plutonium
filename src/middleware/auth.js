const jwt= require('jsonwebtoken')
const middleware=require("../middleware/auth.js")
const authenticate= async function(req, res){
    let userId=req.params.userId
    let token=req.headers["x-auth-token"]
    if(!token) return res.send({status:false,msg:"token is required"})
    next()
}

module.exports.authenticate=authenticate