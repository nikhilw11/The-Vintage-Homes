import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.route.js';

mongoose.connect("mongodb://127.0.0.1:27017/The_Vintage_Homes")
.then (() => {
    console.log('Connected To MongoDB');
})
.catch((err) => {
    console.log(err);
});

const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000!');
    }
);

app.use("/api/user", userRouter)