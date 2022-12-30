import { Request, Response } from "express";
import User, { selectedFields } from "../model/user";

export default {
    "getAll": async (req:Request, res:Response) => {
        try {
            const user = await User.find().select({...selectedFields, updated_at : 1});
            return res.status(200).json(user);
        } catch (error) {
            console.log(error);
        }
        
    }
}