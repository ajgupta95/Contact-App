const User=require('../models/registerModel');
var jwt = require('jsonwebtoken');
const cookieParser=require('cookie-parser');

var logIn=(req,res)=>{
    console.log('body',req.body);
    const email=req.body.email;
    const pass=req.body.password;
    User.findOne({email:email}).then((user)=>{
        console.log(user)
        if(user===null){
            return res.render('login.ejs',{pageTitle:'logIn',message:'User Not exists'})
        }
        if(user.password.toString()!==pass.toString()){
         return res.render('login.ejs',{pageTitle:'logIn',message:'Wrong Password'})
        }
         var token= jwt.sign({email:user.email},'signupProject');
          res.cookie('jwtToken',token);
         console.log('jwtToken',token);
         res.redirect('/fetchUser');

    });
  //  res.redirect('/fetchUser');


};

var fetchUser=(req,res)=>{
    console.log('Email',req.body.email);
    const email=req.body.email;
    User.findOne({email:email.email}).then((user)=>{
        console.log('123456',user);
      if(user){
          return res.render('fetchUser',{name:user.firstName});
      }else{
        return res.json({status : false,code : 101,message : 'not found'});
      }
    });

};

module.exports = {logIn,fetchUser}



