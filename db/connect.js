const mongoose = require('mongoose');

uri = "mongodb+srv://f219290:ceR4sk$WP9T9at9@ubook.qohyrlc.mongodb.net/";

const connectDB = () => {
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

module.exports = connectDB;