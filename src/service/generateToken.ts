import jwt from "jsonwebtoken";
import UserAuth from '../dto/AuhtDto';

const generateToken =  (user: UserAuth): string => {
  const payload = {
    id: user.id,
    email: user.email,
    rol: user.rol,
  };

  return jwt.sign(payload, process.env.JWT_SECRET || "~;#[jumDvmROcE-J-~3gR=h", { expiresIn: '1h' });
};

export default generateToken;