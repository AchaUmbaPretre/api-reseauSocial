import express from 'express'
import { getcomments } from "../controllers/comments.js";

const  router = express.Router();

router.get('/find/:userId', getcomments)





export default router