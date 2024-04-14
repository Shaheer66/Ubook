const path = require('path');

const filePath = path.resolve('./views/SignUp', 'SignUp.html');

module.exports={
    get: (req,res)=>{
        res.sendFile(filePath);
    }
}