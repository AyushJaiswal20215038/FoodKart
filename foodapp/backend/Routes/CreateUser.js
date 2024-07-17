
const express=require('express');
const router= express.Router();
const User= require('../models/User');
const {body , validationResult }= require('express-validator');

const bcrypt = require("bcryptjs");
const jwt= require("jsonwebtoken");
const jwtSecret = process.env.REACT_APP_JWT_SECRET;
const adminSecret=process.env.ADMIN_SECRET;

router.post("/createuser",[
    body('email').isEmail(),
    body('name').isLength({ min: 5}),
    body('password' ,'Incorrect Password').isLength({ min: 5})
] ,async (req,res)=>{
    
    const errors= validationResult(req);
    
    if(!errors.isEmpty()){
        return res.status(400).json({errors : errors.array()});
    }
    const adSecret=req.body.adminSecret;

    if(adSecret!==""&&adSecret!==adminSecret){
        return res.json({success:false});
    }
    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password,salt);
    let secUserType ;
    if(adSecret!==""){
        secUserType=req.body.email+"Admin";
        secUserType= await bcrypt.hash(secUserType,salt);
    }
    try {
        if(adSecret!==""){
            await User.create({
                name: req.body.name,
                password: secPassword,
                email: req.body.email,
                location: req.body.location,
                userType: secUserType
            })
        }
        else{
            await User.create({
                name: req.body.name,
                password: secPassword,
                email: req.body.email,
                location: req.body.location,
                userType: "User"
            })
        }
        res.json({success: true});
    } catch (error) {
        console.log(error);
        res.json({success:false});
    }

})

router.post("/loginuser",[
    body('email').isEmail(),
    body('password' ,'Incorrect Password').isLength({ min: 5})
] ,async (req,res)=>{
    
    const errors= validationResult(req);
    
    if(!errors.isEmpty()){
        return res.status(400).json({errors : errors.array()});
    }

    let email= req.body.email ;

    try {
        let userData=await User.findOne({email : email});
        // console.log(userData);
        if(!userData){
            return res.status(400).json({errors: "Try logging in with correct credentials"});
        }

        const pwdCompare= await bcrypt.compare(req.body.password,userData.password);

        if(!pwdCompare){
            return res.status(400).json({errors: "Incorrect Password"});
        }
        const data= {
            user:{
                id: userData.id
            }
        }
        const authToken= jwt.sign(data,jwtSecret)
        const userCompare = await bcrypt.compare((userData.email+"Admin"),userData.userType)
        if(userData.userType==="User"){
            return res.json({ success:true,authToken: authToken,userType: "User"});
        }
        else if(userCompare){
            return res.json({ success:true,authToken: authToken, userType: "Admin"});
        }else{
            return res.json({success:false,errors: "Problem with database"});
        }
        
    } catch (error) {
        console.log(error);
        res.json({success:false});
    }
})

module.exports=router;
