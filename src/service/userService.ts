import generateToken from "../Helpers/generateToken";
import UserRepository from "../repostories/UserRepository";
import Auth from "../dto/AuhtDto";
import AuthRepository from "../repostories/AuthRepository";


const auhtService =  async (User : Auth) => {
    try {
        const login = await UserRepository.login(User);
        const data = {
            email : login?.email,
            rol : login?.rol
        }
        if (login?.logged) {
            return {
                logged: login.logged,
                status: login.status,
                token : generateToken(data,process.env.JWT_SECRET,60)
            }
        }else{
            return {login: login?.status}
        }
    } catch (error) {
        console.log(error);
        
    }
}
export default auhtService;