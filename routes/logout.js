const express=require('express');
const path=require('path');

const router=express.Router();

router.post('/logout',(req,res)=>{
    res.clearCookie('jwtToken');
    res.header('cache-control','private,no-cache, no-store, must-revalidate');
    res.header('Expires','0');
    res.header('Pragma', 'no-cache');

    res.redirect('/');

});


module.exports=router;