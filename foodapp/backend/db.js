

const mongoose= require('mongoose');
const mongoURL=process.env.REACT_APP_MONGODB;
const mongoDB=async()=>{
    await mongoose.connect(mongoURL).then(()=>{
        
        console.log("Connected");
        const fetched_data=mongoose.connection.db.collection("foodItems");
        fetched_data.find({}).toArray().then(async (data)=>{
            // global.food_items= data;
            const foodCategory = await mongoose.connection.db.collection("foodCategories");
            foodCategory.find({}).toArray().then((catData)=>{
                global.food_items= data;
                global.foodCategory=catData;
            }).catch((e)=>{console.log(e);});


        }).catch((e)=>{console.log(e);});
    }).catch((e)=>{
        console.log(e);
    });    
}

module.exports= mongoDB();