
import db from '../config/configDb';
import AuthDto from '../dto/AuhtDto';

class  AuthRepository {
    static async auht( user : AuthDto){
        const sql = 'SELECT  password FROM User WHERE email= ?';
        const values = [user.email];
        return  db.execute(sql, values);
    }
    static async getAll( user : AuthDto){
        const sql = 'SELECT  id, email, rol FROM User WHERE email= ?';
        const values = [user.email];
        return  db.execute(sql, values);
    }
}

export default AuthRepository;