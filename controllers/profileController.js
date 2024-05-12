const path = require('path');

const filePath = path.resolve('./views/Profile', 'profile-page.html');

module.exports={
    get: (req,res)=>{
        res.sendFile(filePath);
    }
}