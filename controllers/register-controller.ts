import bcrypt from 'bcryptjs';
import Estudiante from '../dto/EstudianteDto';
import EstudianteRepository from '../repostories/EstudianteRepository';
import { Request, Response } from "express";


let register = async (req: Request, res: Response) => {
  try {
    const {
      email,
      nombre,
      apellido,
      edad,
      rol,
      telefono,
      password
    } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const result = await EstudianteRepository.add((new Estudiante(email, nombre, apellido, edad,telefono,rol, hashedPassword)));
    return res.status(201).send(
      { status: 'register ok'}
    );
  } catch (error: any) {
    if (error && error.code == "ER_DUP_ENTRY") {
      return res.status(500).send({ errorInfo: error.sqlMessage }
      );
    }
  }
}


export default register;