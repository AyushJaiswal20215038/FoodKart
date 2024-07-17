const express = require('express')
const router = express.Router()
const FoodItem = require('../../models/FoodItems');
const FoodCategory = require('../../models/FoodCategory');


router.post('/getfoodItems', async (req,res) => {
    let Items=await FoodItem.find({});
    let Categories= await FoodCategory.find({});
    res.json([Items,Categories]);
})



router.post('/addFoodItem', async (req,res)=>{
    try {
        let IsPresent = await FoodItem.find({name:req.body.Item.name});
        console.log(IsPresent);
        if(IsPresent.length===0){
            await FoodItem.create(req.body.Item).then((res)=>{
                res.json({res,status: 200});
            }).catch((err)=>{
                res.json({err,status: 404});
            })
        }
        else if(IsPresent!==0){
            await FoodItem.updateOne({name: req.body.Item.name},req.body.Item).then((res)=>{
                res.json({res,status: 200});
            }).catch((err)=>{
                res.json({err,status: 404});
            })
        }
    } catch (error) {
        res.json({status : 404});
    }
});

router.post('/deleteFoodItem', async (req,res) =>{
    try {
        console.log(req.body);
        await FoodItem.deleteOne({name : req.body.Item}).then((result)=>{
            console.log(`Result:`,result);
            res.json({result,status:200});

        }).catch((err)=>{
            res.json({err,status: 404});
        })
        // return;
    } catch (error) {
        res.json({error,status: 404});
    }
})



module.exports = router;