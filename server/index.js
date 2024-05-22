import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoute from '../server/routes/auth.route.js'
import loansRoute from '../server/routes/loan.route.js'


const app = express();
dotenv.config();
mongoose.set('strictQuery', true)


const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log('Connected to database');
    } catch (error) {
        console.log(error);
    }
}

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

app.use("/server/auth", authRoute)
app.use("/server/loans", loansRoute)

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong";

    res.status(errorStatus).send(errorMessage);
})

app.listen(3000, () => {
    connect();
    console.log('Server is running on port 3000');
});