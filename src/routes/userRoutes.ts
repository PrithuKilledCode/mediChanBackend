import { Express,Router } from "express";
import { createUser } from "../controller/user.controller.js";
const router=Router();
export const createUserRoute=router.post('/create',createUser)