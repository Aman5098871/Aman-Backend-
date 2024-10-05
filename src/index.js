// require('dotenv').config({path: "./env"})
import dotenv from  "dotenv"
// import mongoose from "mongoose";
// import { DB_NAME } from "./constant"
import connectDB from "./db/index.js";


dotenv.config({
    path: "./env"
})


connectDB()