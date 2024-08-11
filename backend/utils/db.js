import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
mongoose.connect(process.env.DB_URL)
.then(()=>console.log('connected'))
.catch(()=>console.log('unable to connect'))

export default mongoose.connection;