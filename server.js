import dotenv from "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import postRoute from "./routes/postRoute.js";

const app = express();
const db = mongoose.connection;

const port = process.env.PORT || 5000
app.use(bodyParser.json());

app.get('/', (req, res)=>{
  res.send("working")
});

app.use("/createPost", postRoute)
//  app.use(getAllPosts);
//  app.use("/editPost", editPost);

app.listen(port,()=>{
    console.log(`http://localhost:${port}/`);
  });
