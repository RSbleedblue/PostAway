import logger from "./logger.middleware.js";
export class customErrorHandler extends Error{
    constructor(statusCode, errMessage){
        super(errMessage);
        this.statusCode = statusCode;
    }
}

export const errorHandlerMiddleware= (err,req,res,next)=>{
    console.log(err);
    if(err instanceof customErrorHandler){
        res.statsu(err.statusCode).send(err.message);
    }
    else{
        res.status(500).send("Oops! something went wrong");
    }

    const logInfo = {
        level: "error",
        timestamp: new Date().toUTCString(),
        reqestURL: req.originalUrl,
        errorMessage: err.message,
    };

    logger.error(logInfo);
    next();
}