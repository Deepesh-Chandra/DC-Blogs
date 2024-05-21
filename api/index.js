import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import cors from 'cors';

const app = express();

const corsOptions = {
    origin: 'http://localhost:5173', // Allow this origin
    optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
  };

  app.use(cors(corsOptions));
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
    const statusCode= error.statusCode || 500;
    const message = error.message;

    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    })
})