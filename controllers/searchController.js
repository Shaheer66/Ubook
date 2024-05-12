const path = require('path');

const filePath = path.resolve('./views/Search', 'search.html');

module.exports={
    get: (req,res)=>{
        res.sendFile(filePath);
    }
}