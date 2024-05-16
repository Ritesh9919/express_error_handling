import { ApiError } from "../utils/index.js";

export const errorHandler = (err, req, res, next)=> {
    console.log(err);
    if(err instanceof ApiError) {
        return res.status(err.code).json({error:err.message});
    }

    return res.status(500).json({error:"Internal server error"})
}