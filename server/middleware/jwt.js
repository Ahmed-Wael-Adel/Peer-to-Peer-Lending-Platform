import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";

export const verifyToken = (req, res, next) => { 
    
    const token = req.cookies.accessToken;
    console.log(req.cookies.accessToken)
    console.log(token)
    if (!token) return next(createError(401, "Unauthorized"));

    jwt.verify(token, process.env.SECRET_KEY, (err, payload) => {
        if (err) return next(createError(403, "Invalid Token"));

        req.userId = payload.id;
        
        next();
    });
}