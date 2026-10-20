const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost/mongopractice"); 
const userName=mongoose.Schema({
    name:String,
    age:Number,
    email:String
})
const userModel=mongoose.model('user',userName);//model bnaya
module.exports=userModel;
