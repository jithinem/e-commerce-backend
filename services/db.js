//importing mongoose
const mongoose=require('mongoose');

//defining the connection string
mongoose.connect('mongodb://localhost:27017/cart',()=>{
    useNewUrlParser:true;
    console.log('connected to mongodb');
})

//creating a model for the products....
//..............the same type of model for json imported from online
const Product=mongoose.model('Product',{
    id:Number,
    title:String,
    price:Number,
    description:String,
    category:String,
    image:String,
    rating:{
        rate:Number,
        count:Number
    }
});

//addtowishlist details to be stored to db
// const addtowishlist=(id,title,price,image,description)=>{
    //creating a new collection in MongoDB- create a model
    const Wishlist=mongoose.model('wishlist',{
        id:Number,
        title:String,
        price:Number,
        image:String,
        description:String
    })
// }

module.exports={
    Product,
    Wishlist
}
