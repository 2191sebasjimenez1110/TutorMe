import { Request, Response} from "express";

const TutoriController = (req : Request, res : Response) => {
    try{
        const email = req.body.email;
        const rol = req.body.rol;

        res.status(200).json({
            status : "Autenticado",
            email : email,
            rol : rol
        })
    }catch(error){
        
    }
}

export default TutoriController;