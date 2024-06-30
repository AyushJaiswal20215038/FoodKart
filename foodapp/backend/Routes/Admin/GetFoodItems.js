const express = require('express')
const router = express.Router()
const FoodItem = require('../../models/FoodItems');
const FoodCategory = require('../../models/FoodCategory');


router.post('/getfoodItems', async (req,res) => {
    let Items=await FoodItem.find({});
    let Categories= await FoodCategory.find({});
    res.json([Items,Categories]);
})



module.exports = router;