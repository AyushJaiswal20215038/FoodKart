const express = require('express')
const router = express.Router()
const FoodItem = require('../../models/FoodItems');
const FoodCategory = require('../../models/FoodCategory');
const User = require(`../../models/User`);
const Order = require(`../../models/Orders`);
const bcrypt= require(`bcryptjs`);

// const verifyAdmin=async (email)=>{
//     const UserType= await User.findOne({Email:email}).userType;
//     const AdminUserType= email+"Admin";
//     const UserCompare = await bcrypt.compare(UserType,AdminUserType);
//     return UserCompare;
// }


router.post('/getAdminInfo', async (req,res) => {
    const arr=[];
    // const verification=verifyAdmin(req.body.email);
    // console.log(req.body.email);
    let UserType= await User.find({email:req.body.email});
    const UserCompare = UserType[0].userType!=="User";
    // UserType=UserType[0].userType;
    // console.log('UserType',UserType);
    // const AdminUserType= req.body.email+"Admin";
    // console.log(AdminUserType);
    // const UserCompare = await bcrypt.compare(AdminUserType,UserType);
    // console.log(UserCompare);
    // let UserCompare=true;
    if(UserCompare){
        const Items=await FoodItem.find({});
        const Categories= await FoodCategory.find({});
        const Users = await User.find({userType: "User"});
        const Orders = await Order.find({});
        
        arr.push({name: "Food Items",value:Items.length, icon:'fa-solid fa-burger fa-2xl'});
        arr.push({name: "Food Categories",value:Categories.length, icon:'bi bi-text-left'});
        arr.push({name: "Users",value:Users.length, icon:'bi bi-people-fill modal-sm'});
        let numOrder = 0;
        Orders.forEach((user)=>{
            numOrder+= user.order_data.length;
        })
        arr.push({name: "Orders",value:numOrder, icon:'bi bi-cart-plus p-3 fs-1'});
    }
    else{
        arr.push({name: "Food Items",value:"N/A", icon:'fa-solid fa-burger fa-2xl'});
        arr.push({name: "Food Categories",value:"N/A", icon:'bi bi-text-left'});
        arr.push({name: "Users",value:"N/A", icon:'bi bi-people-fill modal-sm'});
        arr.push({name: "Orders",value:"N/A", icon:'bi bi-cart-plus p-3 fs-1'});
    }
    
    res.json(arr);
})



module.exports = router;