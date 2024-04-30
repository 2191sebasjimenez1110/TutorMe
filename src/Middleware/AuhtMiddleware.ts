import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';
import UserAuth from '../dto/AuhtDto';
import AuthRepository from '../repostories/AuthRepository';

const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {
            email, 
            password,
        } = req.body;

        const result: any = await AuthRepository.auht(new UserAuth(email));
        if (result[0].length > 0) { 
            const userRow = result[0]; 
            const isPasswordValid = await bcrypt.compare(password, userRow[0].password);

            if (isPasswordValid) {
                next();
            } else {
                return res.status(401).json({ status: 'Incorrect password or email' });
            }
        } else {
            return res.status(401).json({ status: 'User not found' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ status: 'Internal Server Error' });
    }
};

export default authMiddleware;