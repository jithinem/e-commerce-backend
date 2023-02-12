//importing express
const express=require('express');

//importing cors
const cors=require('cors');

//creating an application using express
const app=express();

//connecting to dataServices
const dataServices=require('./services/dataServices');
const { Product } = require('./services/db');

//using json parser for server responses (application)
app.use(express.json());

//specifying the origin to the server by using cors
app.use(cors({
    origins:'http://localhost:4200'
}))

//setting up a port number
app.listen(3000,()=>{
    console.log('listening on port:3000');  //to know wheather it is working
})

//API call to get all products
app.get('/all-products',(req,res)=>{
    dataServices.getProducts().then(
        result=>{
            res.status(result.statusCode).json(result)

        }
    )
})

//api call to addtowishlist
app.post('/addtowishlist',(req,res)=>{
    dataServices.addtowishlist(req.body.id,req.body.title,req.body.price,req.body.image,req.body.description).then(
        result=>{
            res.status(result.statusCode).json(result);
        }
    )
})

//API call to get wishlist products
app.get('/getwishlist',(req,res)=>{
    dataServices.getwishlist().then(
        result=>{
            res.status(result.statusCode).json(result);
        }
    )
})

//API call to delete wishlist
app.delete('/deletewish/:id',(req,res)=>{
    dataServices.deletewish(req.params.id).then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
})