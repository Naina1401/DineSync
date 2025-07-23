import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import { dbConnection } from "./database/dbConnection.js";
import ErrorHandler, { errorMiddleware } from "./error/error.js";
import reservationRouter from "./routes/reservationRoute.js";

const app = express();
dotenv.config({path: "./config/config.env"});

app.use(cors({
    origin: [process.env.FRONTEND_URL],//If multiple frontend we can put multiple url of frontend here as it is an array
    method: ["POST"],//get, put, delete, post
    credentials: true,
}))

//app.use is used as  a middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api/v1/reservation',reservationRouter)

dbConnection();

app.use(errorMiddleware);
export default app;
