const express = require('express')
const router = express.Router()
const Order = require('../models/Orders')


router.post('/myorderData', async (req,res)=>{
    try{
        let myData = await Order.findOne({'email': req.body.email})
        // console.log('#myData: ',myData)
        if(myData.length !== 0)
            res.json({orderData : myData.order_data})
        else
            res.json({orderData : []});
    } catch(error){
        res.send("Server Error",error.message);
    }
})

module.exports = router;