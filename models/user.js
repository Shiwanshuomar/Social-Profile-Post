const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:/database');
const userSchema=mongoose.Schema({
    name:String,
    email:String,
    image:String,
    age:String

})
module.exports=mongoose.model('user',userSchema);