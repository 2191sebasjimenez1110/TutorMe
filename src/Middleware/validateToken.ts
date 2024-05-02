import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const validateToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authorization = req.headers.authorization;

    if (!authorization) {
      return res.status(401).json({ mensaje: 'No autorizado: Token no proporcionado' });
    }

    jwt.verify(authorization, process.env.JWT_SECRET!, (err, token) => {
      if (err) {
        if (err instanceof jwt.TokenExpiredError || err instanceof jwt.JsonWebTokenError) {
          return res.status(401).json({ mensaje: 'No autorizado: Token inválido' });  
        } else {
          return res.status(500).json({ mensaje: 'Error interno del servidor' });
        } 
      }else {
      console.log();
      
        res.status(200).json({
          status : "token autorizado"
        })
        next()
      }

    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};

export default validateToken;