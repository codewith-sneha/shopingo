import jwt from 'jsonwebtoken';


const userAuth = (req,res,next)=>{
    try {
        const {token} = req.headers;
        if(!token){
            res.status(401).json({success:false , message:"unauthorised access"});
        }
        const verify = jwt.verify(token ,process.env.JWT_SECRET );
        
    } catch (error) {
        
    }
}