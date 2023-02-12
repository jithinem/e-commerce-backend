//importing db
const db=require('./db')

//getting all product details from db
const getProducts=()=>{
    return db.Product.find().then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    products:result
                }
            }
            else{
                return{
                    status:false,
                    statusCode:401,
                    message:"Product not found"
                }
            }
        }
    )
}

//addwishlist details store to db
const addtowishlist=(id,title,price,image,description)=>{
    return db.Wishlist.findOne({id}).then(
        (result)=>{
            if(result){
                return{
                    status:false,
                    statusCode:401,
                    message:"Product already added to wishlist"
                }
            }
            else{
                const newProduct=new db.Wishlist({
                    id,title,price,image,description
                })
                newProduct.save();
                return{
                    status:true,
                    statusCode:200,
                    message:"Product added successfully"
                }
            }
        }
    )
}

//get wishlist product details from db
const getwishlist=()=>{
    return db.Wishlist.find().then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    products:result
                }
            }
            else{
                return{
                    status:false,
                    statusCode:401,
                    message:"Wishlist is empty"
                }
            }
        }
    )
}

    //delete wishlist product from db
    const deletewish=(id)=>{
        return db.Wishlist.deleteOne({id}).then(
            (result)=>{
                if(result){
                    return{
                        status:true,
                        statusCode:200,
                        message:"Product removed successfully"
                    }
                }
                else{
                    return{
                        status:false,
                        statusCode:401,
                        message:"Product not found"                    }
                }
            }
        )
    }



module.exports={
    getProducts,
    addtowishlist,
    getwishlist,
    deletewish
}