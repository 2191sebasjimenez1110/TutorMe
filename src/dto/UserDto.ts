class User{
    private _email: string;
    private _nombres: string;
    private _apellidos: string;
    private _edad: number;
    private _rol: string;
    private _telefono: string;
    private _password: string;
    
        constructor(
            email: string,
            nombres: string,
            apellidos: string,
            telefono: string,
            edad: number,
            rol: string,
            password: string
        ) {
            this._email = email;
            this._nombres = nombres;
            this._apellidos = apellidos;
            this._edad = edad;
            this._rol = rol;
            this._telefono = telefono;
            this._password = password; 
        }
    
        get email(): string {
            return this._email;
        }
    
        get nombres(): string {
            return this._nombres;
        }
    
        get apellidos(): string {
            return this._apellidos;
        }

        get edad(): number {
            return this._edad;
        }

        get telefono(): string{
            return this._telefono
        }

        get rol():string{
            return this._rol
        }

        get password(): string {
            return this._password
        }
    
        set email(email : string) {
            this._email = email
        }
    
        set nombres(nombres: string) {
            this._nombres = nombres;
        }
    
        set apellidos(apellidos : string){
            this._apellidos = apellidos
        }

        set edad(edad: number) {
            this._edad = edad;
        }
    
        set telefono(telefono: string) {
            this._telefono = telefono;
        }
    
        set rol(rol: string) {
            this._rol = rol;
        }

        set password(password: string) {
            this._password = password;
        }
    
}

export default User;