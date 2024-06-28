import express from 'express';
import mongoose from 'mongoose';

mongoose.connect("mongodb://127.0.0.1:27017/The_Vintage_Homes")

const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000!');
    }
);