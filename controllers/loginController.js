const path = require('path');

const filePath = path.resolve('./views/Login', 'Login.html');

module.exports={
    get: (req,res)=>{
        res.sendFile(filePath);
    }
}