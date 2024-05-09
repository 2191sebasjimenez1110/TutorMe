import express  from "express";
import validateToken from "../Middleware/validateToken";
import Tutoria from "../controllers/tutoriaController";

const router = express.Router();

router.post('/', validateToken, Tutoria);

export default router