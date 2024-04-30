import generateToken from "../service/generateToken";
import { Request, Response } from "express";
import UserAuth from "../dto/AuhtDto";
import AuthRepository from "../repostories/AuthRepository";

let authController = async (req: Request, res: Response) => {
    try {
        const {
            email
          } = req.body;
        
        const result: any = await AuthRepository.getAll(new UserAuth(email));
      
        const userRow = result[0]; 
        const User : UserAuth = new UserAuth(userRow[0].email,userRow[0].id,userRow[0].rol);
        const token = generateToken(User);
    
        return res.status(200).json({ "status": "inicio de sesion exitoso", token });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ status: 'Internal Server Error' });
      }

}


export default authController;