import express from 'express';
import bodyParser from 'body-parser';
import mongoose from "mongoose";
import * as dotenv from 'dotenv' ;
import cors from 'cors';
import sitterController from './controller/sitter.controller';

// Init an Express App.
const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ['GET', 'POST'],
    credentials: true,
  }),
);
dotenv.config()

// Use your dependencies here
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use all controllers(APIs) here
app.use("/api/sitter", sitterController)

// Start Server here
app.listen(8080, () => {
  console.log('Example app listening on port 8080!');
  mongoose.connect(process.env.DB_HOST).then(() => {
    console.log(`Conneted to mongoDB cloud for pawpet`);
  });
});
