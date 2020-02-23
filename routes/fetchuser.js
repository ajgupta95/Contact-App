const express=require('express');
const path=require('path');

var jwt = require('jsonwebtoken');
const JWTSECRET = 'signupProject';
const cookieParser=require('cookie-parser');
const fetchUserroutes=require('../controllers/fetchData');

const router=express.Router();

var verifyToken=(req,res,next)=>{
    var token=req.cookies.jwtToken;
    if(token){
        jwt.verify(token,JWTSECRET,(err,data)=>{
           if(err){ return res.status(403).send();

        }else{
            console.log('Getting',data);
            req.body.email=data;
            next(); 
        }
        }); 
    }else{
        res.render('login',{message:'Not authorised',pageTitle:'logIn'});
    }
};

router.get('/fetchUser',verifyToken,fetchUserroutes.fetchUser);


module.exports=router;