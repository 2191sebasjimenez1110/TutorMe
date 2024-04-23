import db from '../config/config-db';
import Estudiante from '../dto/EstudianteDto';

class EstudianteRepository {

    static async add(estudiante: Estudiante){
        const sql = 'INSERT INTO estudiantes (email, nombres, apellidos, edad, rol, telefono, password) VALUES (?,?,?, ?, ?, ?, ?)';
        const values = [estudiante.email, estudiante.nombres, estudiante.apellidos,estudiante.edad, estudiante.rol, estudiante.telefono, estudiante.password];
        return db.execute(sql, values);
    }

    static async auht(email:string){
        const sql = 'SELECT password FROM estudiantes WHERE email= ?';
        const values = [email];
        return db.execute(sql, values);
    }
}

export default EstudianteRepository

