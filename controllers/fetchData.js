const User=require('../models/registerModel');

exports.fetchUser=(req,res)=>{
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