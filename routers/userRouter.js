const express = require("express");
const Model = require("../models/usermodel");
const router = express.Router();
router. post('/add',(req,res)=>{
    //console.log('request on /add in userRouter');
    //res.send('response from userrouter /add');    
    const data=req.body;
    console.log(data);
    new Model(req.body).save()
    .then((data) => {
        console.log("user data save");
        res.status(200).json({message:"success"});
    }).catch((err) => {
       console.error(err);
       res.status(500).json(err); 
    });
   
});
router.get('/getall',(req,res)=>{
    Model.find({username:'leon'})
    .then((data) => {
        console.log(data);
        res.status(200).json(data);
        
    }).catch((err) => {
        console.error(err);
       res.status(500).json(err); 
        
    });
})
module.exports=router;