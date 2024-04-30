import express from "express";
import bodyParser from 'body-parser';
import dotenv from "dotenv";

import register from './routers/register';
import auth from './routers/auth';

dotenv.config();

const app = express();
app.use(bodyParser.json());

app.use('/register', register);
app.use('/auth', auth);

const PORT = process.env.PORT || 10101;

app.listen(PORT, () => {
  console.log("Servidor ejecutándose en el puerto: ", PORT);
}).on("error", (error) => {
  throw new Error(error.message);
});