const express=require('express');
const app=express();
const morgan=require('morgan');
const productRoutes=require('./api/routes/products');
const orderRoutes=require('./api/routes/orders');
//Routes which should handle requests

app.use(morgan('dev'));
app.use('/products',productRoutes);
app.use('/orders',orderRoutes);
//handling errors
app.use((req,res,next)=>{
    const error=new Error('Not found');
    error.status(404);
    next.error;
})
app.use((error,req,res,next)=>{
    res.status(404);
    res.json({
        error:{
            message:error.message
        }
    });
});
module.exports=app;
