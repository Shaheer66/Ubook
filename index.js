const express= require("express")

const app=express()
const homeRoute=require('./routes/Home');
const loginRoute=require('./routes/Login');
const resetRoute=require('./routes/ResetPassword')
const signupRoute=require('./routes/SignUp')
const verifyemailRoute=require('./routes/VerifyEmail')


app.use(express.static('views'))

app.use("/home",homeRoute)
app.use("/login",loginRoute)
app.use("/resetpassword",resetRoute)
app.use("/signup",signupRoute)
app.use("/verifyemail",verifyemailRoute)

app.listen(3000,()=>{
    console.log("sever running");
});