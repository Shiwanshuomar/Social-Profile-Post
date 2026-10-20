//backend me 2 server hote hai ek node ka server aur dusra database(mongodb ka server) aur moongoose interface hai node aur mongodb ke beech ka 
const express=require('express');
const app=express();
const userModel=require('./mongoose');
app.get('/',(req,res)=>{
    res.send(req.params);
})
app.get('/create',async (req,res)=>{
  let createduser= await userModel.create({
        name:'Shiwanshuuutm',
        age:223,
       email:'shiwanshuuu27@gmail.com'
    });
    res.send(createduser);
})
app.get('/update',async (req,res)=>{
  let updateduser= await userModel.findOneAndUpdate({age:21},{name:'rajesh'},{new:true})
    res.send(updateduser);
})
app.get('/read',async (req,res)=>{
 let readuser= await userModel.find();//read all data->ye array dega 
    // let readuser= await userModel.find({age:21});//read one data->ye object dega
     res.send(readuser);
})
app.get('/delete',async (req,res)=>{
//    let deleteuser= await userModel.deleteMany({});//read all data->ye array dega 
    let deleteuser= await userModel.findOneAndDelete({age:223});//read one data->ye object dega
     res.send(deleteuser);
})
app.listen('3000',()=>{
    console.log("Done");
})