const User=require('../models/registerModel');


exports.postUser=(req,res)=>{
    const firstName=req.body.firstname;
    const lastName=req.body.lastname;
    const email=req.body.email;
    const password=req.body.psw;
    const cnfrmpsw=req.body.cnfrmpsw;
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
   if(password!==cnfrmpsw){
       const message='Password did not macthed'
   return res.render('signUp.ejs',{message:message,pageTitle:'SignUp'}); 
     } 
    if(!mailformat.test(email)){
        return   res.render('signUp.ejs',{pageTitle:'signUP',message:' Please Enter valid Email'});
     }
     User.find({email:email}).exec()
     .then(users=>{
        console.log(users)
             if(users.length>0){
               
                 return res.render('signUp',{pageTitle:'signUp',message:'Email already Exists'})
             }else{ 
                const user= new User({firstName:firstName,lastName,email, password});
                user.save().then((doc)=>{
                    console.log(doc);
                 //res.render('signUp',{pageTitle:'signUp',message:'signUp successfully'})
                 res.redirect('/');
                 
                },(e)=>{
                    res.status(400).send(e);
                 } )};
                 
                });
                
             

     };
  
       

