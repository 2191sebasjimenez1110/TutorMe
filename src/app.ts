import express from "express";
import bodyParser from 'body-parser';
import dotenv from "dotenv";

import register from './routers/user';
import auth from './routers/auth';
import tutoria from "./routers/tutoria";

dotenv.config();

const app = express();
app.use(bodyParser.json());

app.use('/register', register);
app.use('/auth', auth);
app.use('/tutoria', tutoria)

const PORT = process.env.PORT || 10101;

app.listen(PORT, () => {
  console.log("Servidor ejecutándose en el puerto: ", PORT);
}).on("error", (error) => {
  throw new Error(error.message);
});