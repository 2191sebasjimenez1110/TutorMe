export default class Auth {
    id ?: number
    email : string;
    password ?: string;
    rol ?: string;

    constructor(
        email : string,
        id ?: number,
        rol ?: string,
        password ?: string,    
    ) {
        this.email = email;
        this.id = id
        this.password = password;
        this.rol = rol        
    }
}