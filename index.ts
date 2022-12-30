import express, { Express } from 'express';
import dotenv from 'dotenv';
import {set, connect} from "mongoose";
import userRoutes from "./router/user";
dotenv.config();

set('strictQuery', false);
connect(process.env.DB||'');

const app: Express = express();
const port = process.env.PORT;

app.use('/', userRoutes);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});