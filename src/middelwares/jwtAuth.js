import jwt from 'jsonwebtoken';
const jwtAuth = (req,res,next)=>{
    console.log(req.headers);
    const token = req.headers['authorization'];
    if(!token){
        return res.status(401).send('Unauthorized');
    }
    try{
        const payload = jwt.verify(
            token,
            "AIb6d35fvJM4O9pXqXQNla2jBCH9kuLz"
        );
        req.UserId = payload.userId;
        next();
        console.log(payload);
    }
    catch(err){
        console.log(err);
        return res.status(401).send('Unauthorized');
    }
};
export default jwtAuth;