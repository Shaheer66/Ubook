const express= require("express")
const path = require('path');
const mongoose = require('mongoose');

const app=express()
const connectDB = require("./db/connect")
const homeRoute=require('./routes/Home');
const loginRoute=require('./routes/Login');
const resetRoute=require('./routes/ResetPassword')
const signupRoute=require('./routes/SignUp')
const verifyemailRoute=require('./routes/VerifyEmail')
const postRoute=require('./routes/Post')
const chatRoute=require('./routes/Chat')
const profileRoute=require('./routes/Profile')
const searchRoute=require('./routes/Search')
app.use(express.static('views'))




const PORT = process.env.PORT || 3000;


app.set('view engine', 'ejs');

app.use(express.json());
const bodyParser = require('body-parser');
const connectDB = require("./db/connect");
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect('mongodb://localhost:27017/ubook').then(() => {console.log('Connected to MongoDB')});

app.use(express.static(path.join(__dirname, 'public')));


app.use("/home",homeRoute)
app.use("/login",loginRoute)
app.use("/resetpassword",resetRoute)
app.use("/signup",signupRoute)
app.use("/verifyemail",verifyemailRoute)
app.use("/post",postRoute)
app.use("/profile",profileRoute)
app.use("/search",searchRoute)
app.use("/chat",chatRoute)

const start = async () => {
    try {
        await connectDB();
        app.listen(3000,()=>{
            console.log("sever running on port 3000");
        });    
    } catch (error) {
        console.log(error);
    }
};
