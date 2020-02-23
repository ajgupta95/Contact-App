const express=require('express');
const path=require('path');

const signcontroller=require('../controllers/signUp')

const router=express.Router();

router.get('/signUp',(req,res)=>{
res.render('signUp.ejs',{pageTitle:'Sign In',message:''})
});

router.post('/signUp',signcontroller.postUser);

module.exports=router;
