const path = require('path');

const filePath = path.resolve('./views/ResetPassword', 'ResetPassword.html');

module.exports={
    get: (req,res)=>{
        res.sendFile(filePath);
    }
}