import bcrypt from 'bcryptjs';
import { Request, Response } from "express";

import UserRepository from '../repostories/UserRepository';
import User from '../dto/UserDto';


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
    const result = await UserRepository.add((new User(email, nombre, apellido, edad,telefono,rol, hashedPassword)));
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