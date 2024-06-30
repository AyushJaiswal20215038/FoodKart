const express = require('express')
const router = express.Router()
const User = require('../../models/User')

router.post('/userData', async (req,res) => {
    let adminEmail=req.body.email;
    let user_data=await User.find({});
    user_data=user_data.filter(user=>user.userType=="User");
    
    res.json({userData:user_data,success: true});
})

module.exports = router;