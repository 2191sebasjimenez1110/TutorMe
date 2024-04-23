const bcrypt = require("bcryptjs");
const db = require('../config/config-db.js');

import EstudianteRepository from "../repostories/EstudianteRepository";

import { Request, Response } from "express";

let auth = async (req: Request, res: Response) => {
      try {
        const {
          email, 
          password
        } = req.body;
        
        const result: any = await EstudianteRepository.auht(email)
        
        
        if (result[0].length > 0){
          const isPasswordValid = await bcrypt.compare(password, result[0][0].password);
          if (isPasswordValid){
            return res.status(200).json({ 
              status: 'Successful authentication'
            });
          }
        }
        return res.status(401).json({ 
          status: 'Incorrect username or password'
        });
      } catch (error) {
        console.log(error);
      }
}


export default auth;