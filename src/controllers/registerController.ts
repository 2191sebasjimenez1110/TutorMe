import { Request, Response } from "express";

import UserRepository from '../repostories/UserRepository';
import User from '../dto/UserDto';
import generateHash from '../Helpers/generateHash';


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

    const hashedPassword = await generateHash(password);
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