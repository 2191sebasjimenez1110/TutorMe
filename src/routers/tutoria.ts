import express  from "express";
import validateToken from "../Middleware/validateToken";

const router = express.Router();

router.post('/', validateToken);

export default router