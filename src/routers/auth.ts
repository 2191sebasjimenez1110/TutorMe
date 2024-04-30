import express from "express";
import authController from '../controllers/authController';
import authMiddleware from "../Middleware/AuhtMiddleware";
const router = express.Router();


router.post('/', authMiddleware, authController);


export default router;
