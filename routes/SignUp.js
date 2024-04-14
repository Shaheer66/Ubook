const express= require("express")
const router=express.Router()

const controller=require('../controllers/signupController')

router.get('/',controller.get)


module.exports=router;