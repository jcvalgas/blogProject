import express from "express";
import { getIndex, getAbout, getContact, getPost, getCompose, postCompose } from "../controller/postsController.js";

export const routes = express.Router();

routes.get('/', getIndex)
routes.get('/about', getAbout)
routes.get('/contact', getContact)
routes.get('/posts/:postId', getPost)

routes.get('/compose', getCompose)
routes.post('/compose', postCompose)



