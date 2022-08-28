const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const productController= require("../controllers/productController")
const orderController = require("../controllers/orderController")
const commonMW = require ("../middlewares/commonMiddlewares")


router.post("/createUser",commonMW.mid1,UserController.createUser  )


router.post("/createProduct",productController.createProduct)


router.post("/createOrder", commonMW.mid1,orderController.createOrder)



module.exports = router;





