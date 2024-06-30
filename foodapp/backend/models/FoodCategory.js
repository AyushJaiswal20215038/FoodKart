const mongoose = require('mongoose');

const FoodCatSchema = new mongoose.Schema({
    CategoryName: {
        type: String,
        required: true
    }
})


module.exports=mongoose.model('foodCategory',FoodCatSchema);