const jwt= require('jsonwebtoken')
const middleware=require("../middleware/auth.js")
const authenticate= async function(req, res,next){
    let token=req.headers["x-auth-token"]
    if(!token) return res.send({status:false,msg:"token is required"})
     let decodeToken= jwt.verify(token,'SAmSIM-Sr5slt178')
     req.decodeToken=decodeToken
     req.Sameer="ratagsdaseavajaok"
    next()
}
  
const authorization=async function(req,res,next){
    let userId=req.params.userId
    let decodeTokenId=req.decodeToken.userId
    if(userId==decodeTokenId){
        next()
    }
    return res.send({status:false,msg:"person is not authorised"})
    
} 




module.exports.authenticate=authenticate
module.exports.authorization=authorization