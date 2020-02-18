const express=require('express');
const router =express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'Handling GET request to /products'
    });
});
router.post('/',(req,res,next)=>{
    res.status(201).json({
        message:'Handling POST requests to /products'
    });
});

router.get('/:productId',(req,res,next)=>{
    const id=req.params.productId;
    if(id==='special'){
        res.status(200).json({
            message:'You discovered special ID',
            id:id,
            address:'Mars'
        });
    }
    else if(id==='vipin'){
        res.status(200).json({
            message:'You have entered Vipin',
            id:69,
            address:'Jupiter'
        });
    }
    else{
        res.status(200).json({
            message:'Oops you have made the wrong choice',
            id:id
        });
    }
});
router.patch('/:productId',(req,res,next)=>{
    res.status(200).json({
        message:'Updated product!'
    });
});
router.delete('/:productId',(req,res,next)=>{
    res.status(200).json({
        message:'Updated product : Deleted!'
    });
});
module.exports=router;