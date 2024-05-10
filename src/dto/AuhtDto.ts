export default class Auth {
    private _email : string;
    private _password : string;
    private _rol ?: string;

    constructor(
        email : string,
        password : string, 
        rol ?: string,   
    ) {
        this._email = email;
        this._password = password;
        this._rol = rol        
    }

    get email():string{
        return this._email
    }

    get password():string{
        return this._password;
    }

    get rol():string | undefined{
        return this._rol
    }

    set email(email: string){
        this._email = email
    }

    set password(password: string){
        this._password = password
    }

    set rol(rol: string){
        this._rol = rol
    }
}