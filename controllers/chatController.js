const path = require('path');

const filePath = path.resolve('./views/Chat', 'message.html');

module.exports={
    get: (req,res)=>{
        res.sendFile(filePath);
    }
}