import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import ExpensesRoute from './route/ExpensesRoute.js'






import cookieParser from 'cookie-parser';

dotenv.config();



const app = express();

app.use(express.json());
app.use(cookieParser());

//route middleware

app.use("/api/Expenses",ExpensesRoute);



const PORT=process.env.PORT || 5000;
mongoose
    .connect(process.env.MONGO)
    .then(() => {
        console.log("MongoDB connected successfully!"); 
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err); 
    });





app.use((err, req, res, next) =>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})
 