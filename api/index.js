import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();
app.use(cookieParser());

app.use(cors({
    origin: 'http://localhost:5173'
  }));


dotenv.config();

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("MongoDB connected successfully");
}).catch((err) => {
    console.log(err);
})



app.listen(3000, () => {
    console.log("Server is running on port 3000");
})

app.use(express.json());

app.use("/api/auth", authRoutes)
app.use((error, req, res, next) => {
    const statusCode = error.statusCode || 500;
    const message = error.message;

    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    })
})