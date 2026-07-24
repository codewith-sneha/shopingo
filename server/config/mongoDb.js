import mongoose from "mongoose"
const mongoDb = async ()=>{
    mongoose.connection.on('connected',()=>{
        console.log("Database connected successfully ✅");
    })
    await mongoose.connect(`${process.env.MONGO}/shopingo`)
}

export default mongoDb;