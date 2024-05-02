import { Request, Response } from "express";
import UserAuth from "../dto/AuhtDto";
import auhtService from "../service/authService";

let authController = async (req: Request, res: Response) => {
    try {
        const {
            email,
            password
          } = req.body;

          const login = await auhtService(new UserAuth(email,password));

          if (login?.logged) {
            return res.status(200).json({
              status: login.status,
              token: login.token
            });
          }else{
            return res.status(404).json({
              status : login?.status
            })
          }
          
      } catch (error) {
        console.error(error);
        return res.status(500).json({ status: 'Internal Server Error' });
      }

}


export default authController;