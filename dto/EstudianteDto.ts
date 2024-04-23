class Estudiante{
    email: string;
    nombres: string;
    apellidos: string;
    edad: number;
    rol: string
    telefono: string;
    password: string
    constructor(
        email: string, 
        nombres: string,
        apellidos: string, 
        telefono: string,
        edad: number,
        rol: string,
        password: string
    ) {
        this.email = email;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.edad = edad;
        this.rol = rol;
        this.telefono = telefono;
        this.password = password
    }
}

export default Estudiante;