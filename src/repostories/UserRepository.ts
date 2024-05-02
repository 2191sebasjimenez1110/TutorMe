import bcrypt from 'bcryptjs';
import db from '../config/configDb';
import User from '../dto/UserDto';
import Auth from '../dto/AuhtDto';

class UserRepository {

    static async add(estudiante: User){
        const sql = 'INSERT INTO User (email, nombres, apellidos, edad, rol, telefono, password) VALUES (?, ?, ?, ?, ?, ?, ?)';
        const values = [estudiante.email, estudiante.nombres, estudiante.apellidos,estudiante.edad, estudiante.rol, estudiante.telefono, estudiante.password];
        return await db.execute(sql, values);
    }

    static async login(auth: Auth){
        const sql = 'SELECT  password FROM User WHERE email= ?';
        const values = [auth.email];
        const result: any = await db.query(sql,values);
        if (result[0].length > 0) { 
            const userRow = result[0]; 
            const isPasswordValid = await bcrypt.compare(auth.password, userRow[0].password);

            if (result[0].length > 0){
                const isPasswordValid = await bcrypt.compare(auth.password, result[0][0].password);
                if (isPasswordValid){
                  return {logged: true, status: "Successful authentication"}
                }
                return {logged: false, status: "Invalid username or password" };
              }
            return {logged: false, status: "Invalid username or password" };
        }
    }
}

export default UserRepository

