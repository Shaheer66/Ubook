const express= require("express")
const router=express.Router()

const controller=require('../controllers/verifyEmailController')

router.get('/',controller.get)


module.exports=router;