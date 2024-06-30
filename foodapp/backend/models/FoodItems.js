const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    CategoryName: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true,
        unique: true
    },
    options: {
        type: Array,
        required: true
    },
    description: {
        type: String,
        required: true,
    }
})


module.exports=mongoose.model('foodItem',FoodSchema);