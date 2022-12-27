import jwt from 'jsonwebtoken'
import {promisify} from 'util'
import asyncHandler from "express-async-handler"
import AppError from '../utils/appError.js';

export const userAuthentication=asyncHandler(async(req,res,next)=>{
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }
    if(!token){
        throw new AppError("token not found",401)
    }
    const decoded = await promisify(jwt.verify)(
      token,
      process.env.JWT_SECRET
    );
    if(decoded){
      res.json({
        status:"authorized user",
        decoded
      })
    }else{
      throw new AppError("unauthorized user",401)
    }
})

export const adminAuthentication=asyncHandler(async(req,res,next)=>{
  let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }
    if(!token){
        throw new AppError("token not found",401)
    }
    const decoded = await promisify(jwt.verify)(
      token,
      process.env.JWT_SECRET
    );
    if(decoded){
      req.admin=decoded;
      return next();  
    }else{
      throw new AppError("unauthorized admin",401)
    }
})

