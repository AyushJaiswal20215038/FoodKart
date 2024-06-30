const express = require('express')
const router = express.Router()
const User = require('../../models/User')

router.post('/deleteUserData', async (req,res) => {
    let userEmail=req.body.userInfo.email;
    let userName=req.body.userInfo.name;
    let result=await User.deleteOne({email:userEmail,name:userName});
    console.log("##result",result);
    res.json({result:result});
})

module.exports = router;