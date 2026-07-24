import jwt from 'jsonwebtoken';

const adminAuth = (req,res,next)=>{
    try {
        const {token} = req.headers;
        if(!token){
           return res.json({success:false,message:"Unauthorised Access"}); 
        }
        const decodeToken = jwt.verify(token ,process.env.JWT_SECRET );
        if(decodeToken.id !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
            return res.json({success:false,message:"Invalid Token "}); 
        }
        next()
}
    catch (error) {
        res.json({success:false,message:error.message}); 
    }
}

export default adminAuth;