export default class Auth {
    id ?: number
    email : string;
    password : string;
    rol ?: string;

    constructor(
        email : string,
        password : string, 
        id ?: number,
        rol ?: string,   
    ) {
        this.email = email;
        this.id = id
        this.password = password;
        this.rol = rol        
    }
}