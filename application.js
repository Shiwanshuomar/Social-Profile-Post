const express=require('express');
const app=express();
const path=require('path');
const userModel=require('./models/user'); 
const user = require('./models/user');
app.set("views", "./views2");
app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public 2')));
app.get('/',(req,res)=>{
    res.render('index');
}) 
app.post('/create',async(req,res)=>{
  let createduser=  await userModel.create({
        name:req.body.name,
        email:req.body.email,
        age:req.body.age,
        image:req.body.image
    });
    res.redirect('/read');
})
app.get('/read',async(req,res)=>{
     let readuser= await userModel.find();
     res.render('read',{users:readuser});
})
app.get('/update/:id', async(req,res)=>{
     let readuser= await userModel.findById(req.params.id);
      res.render('update',{user:readuser});
})
 app.post('/update/:id',async (req,res)=>{
    let updateduser= await userModel.findOneAndUpdate({_id:req.params.id},req.body,{new:true});
  res.redirect('/read');
})
app.get('/delete/:id',async(req,res)=>{
    let deleteuser=await userModel.findOneAndDelete({_id:req.params.id});
    res.redirect('/read');
})
app.listen('3000');
   
