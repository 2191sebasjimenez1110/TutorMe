import generateToken from "../Helpers/generateToken";
import UserRepository from "../repostories/UserRepository";
import Auth from "../dto/AuhtDto";
import AuthRepository from "../repostories/AuthRepository";


const auhtService =  async (User : Auth) => {
    try {
        const login = await UserRepository.login(User);
        const data : any = await AuthRepository.get(User)
        const token = await generateToken(new Auth(data[0].email,data[0].password,data[0].id,data[0].rol));  
        if (login?.logged) {
            return {
                logged: login.logged,
                status: login.status,
                token : token
            }
        }else{
            return {login: login?.status}
        }
    } catch (error) {
        console.log(error);
        
    }
}
export default auhtService;