const path = require('path');

const filePath = path.resolve('./views/Home', 'Home.html');

module.exports={
    get: (req,res)=>{
        res.sendFile(filePath);
    }
}