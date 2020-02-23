const express=require('express');
const path=require('path');

const loginController=require('../controllers/login');
const user=require('../models/registerModel');
var jwt = require('jsonwebtoken');
const JWTSECRET = 'signupProject';
const cookieParser=require('cookie-parser');

// var verifyTokenAPI=function(req,res,next){
//     console.log('current', req.headers.token);
//     if(req.headers.token){
//       const token = req.headers.token;
//        //  tokenStatus	=req.cookies.jwtToken[1];
//         jwt.verify(token,JWTSECRET, (err, decoded) => {
//             console.log('current', decoded);
//           if (err)return res.redirect('/');
//             user.findOne({email: decoded.email}).then(function(res){
//               if(res==null || res=='')return res.redirect('/');
//               if(res){
//                 req.headers = res;
//                 console.log('headers', req.headers.email);
//                 return next();
//               }
//             }).catch(function(err){
//               return res.redirect('/');
//             });
//         });
      
//     }else {
//       return res.json({status : false , message : 'Authentication failure'});
//     }
//   };
const router=express.Router();

// var verifyToken=(req,res,next)=>{
//     var token=req.cookies.jwtToken;
//     if(token){
//         jwt.verify(token,JWTSECRET,(err,data)=>{
//            if(err){ return res.status(403).send();

//         }else{
//             console.log('Getting',data);
//             req.body.email=data;
//             next(); 
//         }
//         }); 
//     }else{
//         res.render('login',{message:'Not authorised',pageTitle:'logIn'});
//     }
// };


router.get('/',(req,res)=>{
res.render('login.ejs',{pageTitle:'LogIn',message:''})
});

router.post('/login',loginController.logIn);
//router.get('/fetchUser',verifyToken,loginController.fetchUser);




module.exports=router;