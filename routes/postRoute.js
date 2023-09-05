
import {Router} from "express";
import { createPost, getAllPosts, editPost } from "../controllers/postController.js";
const app = Router();

 app.post("/createPost", createPost);
 app.get("/getAllPosts", getAllPosts);
app.put("/editPost", editPost);
 export default app;



