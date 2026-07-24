import productModel from "../models/productModel.js";
import {v2 as cloudinary} from 'cloudinary';

const addProduct = async (req,res)=>{
    try {
        const {name , description , price , sizes , bestseller , category , subCategory } =req.body;
        const image1 = req.files.image1 && req.files.image1[0];
        const image2 =req.files.image2 && req.files.image2[0];
        const image3 = req.files.image3 && req.files.image3[0];
        const image4 = req.files.image4 && req.files.image4[0];

        const images = [image1,image2,image3,image4].filter((image)=> image!==undefined);

        let imageurl = await Promise.all(
            images.map(async(item)=>{
                let result = await cloudinary.uploader.upload(item.path,{resource_type:'image'})
                return result.secure_url;
            })
        )
        const productData = {
            name,description,price ,
            bestseller:bestseller==='true'?true:false,
            sizes:JSON.parse(sizes),
            category,
            subCategory,
            images:imageurl,
            date:Date.now()
        }

        const product= await new productModel(productData);
        await product.save();
        res.json({success:true,message:"product added"})
        // console.log(name , description , price , sizes , bestseller , category , subCategory );
        // console.log(images);
    } catch (error) {
        console.log(error.message);
        res.json({success:false,message:error.message})
    }
}

const listProducts = async (req,res)=>{
    try {
        const products = await productModel.find({});
    res.json({success:true , products});
    } catch (error) {
        res.json({success:false,message:error.message})
    }
}

const deleteProduct = async (req,res)=>{
    try {
        await productModel.findByIdAndDelete(req.body.id)
        res.json({success:true,message:"Product successfully Deleted"});
    } catch (error) {
         res.json({success:false,message:error.message})
    }
}

const getProduct = async (req,res)=>{
    try {
        const {productId} = req.body;
        const product = await productModel.findById(productId);
         res.json({success:true,product})
    } catch (error) {
         res.json({success:false,message:error.message})
    }
}

export {getProduct , addProduct, deleteProduct, listProducts};