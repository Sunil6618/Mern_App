const Mongo  = require("mongoose");
const userDetails = Mongo.Schema({
    username:String,
    password:String,
    mobileno:String
});

const userModel = Mongo.model("User",userDetails,"User");
module.exports = userModel;