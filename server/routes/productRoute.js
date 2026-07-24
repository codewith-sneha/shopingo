import upload from '../middleware/multer.js'; 
import {getProduct , addProduct, deleteProduct, listProducts} from '../controller/productController.js'
import express from 'express'
import adminAuth from '../middleware/adminAuth.js';

const productRouter = express.Router();

productRouter.get('/get',getProduct);

productRouter.get('/list',listProducts);

productRouter.post('/add',adminAuth, upload.fields([{name:'image1' ,maxcount:1},{name:'image2' ,maxcount:1},{name:'image3' ,maxcount:1},{name:'image4' ,maxcount:1}]),addProduct);

productRouter.delete('/delete',adminAuth,deleteProduct);

export default productRouter;