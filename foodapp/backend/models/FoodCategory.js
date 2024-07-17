const mongoose = require('mongoose');

const FoodCatSchema = new mongoose.Schema({
    CategoryName: {
        type: String,
        required: true
    },
    options: {
        type: Array
    }
})


module.exports=mongoose.model('foodCategory',FoodCatSchema);