import { Request, Response } from "express";
import prisma from "../DB/db.config.js";
export const createUser = async(req:Request,res:Response) =>{
  const {username,password,email}=req.body;
  const findUser=await prisma.user.findUnique({
    where:{
      email:email
    }
  })
  if(findUser){
    return res.status(400).json({message:"Email already exists"})
  }
  const newUser=await prisma.user.create({
    data:{
      username:username,
      password:password,
      email:email
    }
  })
  return res.status(200).json({message:"User created successfully",status:200,data:newUser})
}