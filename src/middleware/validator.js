'use strict';

module.exports=(req,res,next)=>{
    if (!req.body.food||!req.body.role){
        next('invalid req data')
    }
    else{
        next();
    }
};