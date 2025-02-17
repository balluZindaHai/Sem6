 const mongoose=require('mongoose');

const regSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
})
const regModel = mongoose.model("Register",regSchema);

module.exports = regModel