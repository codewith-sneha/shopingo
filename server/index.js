import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import mongoDb from "./config/mongoDb.js";
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoute.js";
import connectCloudinary from "./config/cloudnary.js";
import cartRouter from "./routes/cartRoute.js";

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

//api config
mongoDb();
connectCloudinary();

app.use(cors());

app.use(express.json());

// api endpoint

app.use('/api/product',productRouter);
app.use('/api/user',userRouter);
app.use('/api/cart',cartRouter);

app.get("/",(req,res)=>{
    res.send("hello from shopingo server ");
})

app.listen(port,()=>{
    console.log(`server listening to ${port} ✅`);
})