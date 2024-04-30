import {Request,Response,NextFunction} from 'express'
import jwt from 'jsonwebtoken';



interface UserPayload {
    id: number;
    email : string;
    rol : string
  }

const validateToken = async (req : Request, res: Response, next: NextFunction) => {
    try{

    const autorizacion : any = req.headers.authorization

    const token = autorizacion.split(' ')[1];
    const datosDecodificados = jwt.verify(token, process.env.JWT_SECRET || 'SECRETO_INVALIDO') as UserPayload;


    next()
    } catch (error) {
    
        console.error(error);

        if (error instanceof jwt.TokenExpiredError) {
        return res.status(401).json({ mensaje: 'No autorizado: Token expirado' });
        } else if (error instanceof jwt.JsonWebTokenError) {
        return res.status(401).json({ mensaje: 'No autorizado: Token inválido' });
        } else {
        return res.status(500).json({ mensaje: 'Error interno del servidor' });
        }
  }
};

export default validateToken;
