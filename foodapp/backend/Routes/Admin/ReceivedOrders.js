const express = require('express')
const router = express.Router()
const Order = require('../../models/Orders')

router.post('/receivedOrder', async (req,res) => {
    let OrderData=await Order.find({});
    res.json(OrderData);
})

module.exports = router;