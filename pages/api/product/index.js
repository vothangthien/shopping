import connectDB from "../../../utils/connectDB"; 
import Products from '../../../models/productModel'
connectDB()

// eslint-disable-next-line import/no-anonymous-default-export
export default async(req, res, next) =>{
     switch(req.method){
           case"GET":
           await getProducts(req, res, next)
           break;
     }
}

const getProducts =async(req, res, next) =>{
     try {
          const products = await Products.find();
          res.json({
               status:'success',
               result: products.length,
               products
          })
          
     } catch (error) {
          return res.status(500).json({error: error.message})
     }
}