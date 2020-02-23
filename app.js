const path=require('path');

const express =require('express');
const bodyParser=require('body-parser');
const ejs=require('ejs');
const mongoose=require('mongoose');
const cookieParser=require('cookie-parser');

const loginRoutes=require('./routes/login');
const signUpRoutes=require('./routes/signUp');
const logoutRoutes=require('./routes/logout');
const fetchRoutes=require('./routes/fetchuser');

const app=express();

app.set('view engine','ejs');
app.set('views','views');

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));


app.use(loginRoutes);
app.use(signUpRoutes);
app.use(logoutRoutes);
app.use(fetchRoutes);

app.use((req,res)=>{
res.status(404).render('404.ejs',{pageTitle:'Page Not Found'});
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, , Accept");
    next();
  }); 


mongoose.Promise=global.Promise;
mongoose.set('useUnifiedTopology',true);
mongoose.connect('mongodb://localhost:27017/ContactAPP',{
    useNewUrlParser:true
}).then((res)=>{
    if(res){
     return   console.log('connected to db');
    }
    console.log('Not connected to db');
});


app.listen(3000,()=>{
console.log('server is listening');
});
