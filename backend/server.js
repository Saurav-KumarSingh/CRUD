import express from "express";
import dotenv from 'dotenv';
dotenv.config();
import db from './utils/db.js';
import cors from 'cors';
import router from './routes/route.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api', router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
