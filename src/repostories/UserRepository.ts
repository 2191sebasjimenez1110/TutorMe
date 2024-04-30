import db from '../config/configDb';
import User from '../dto/UserDto';

class UserRepository {

    static async add(estudiante: User){
        const sql = 'INSERT INTO User (email, nombres, apellidos, edad, rol, telefono, password) VALUES (?, ?, ?, ?, ?, ?, ?)';
        const values = [estudiante.email, estudiante.nombres, estudiante.apellidos,estudiante.edad, estudiante.rol, estudiante.telefono, estudiante.password];
        return await db.execute(sql, values);
    }
}

export default UserRepository

