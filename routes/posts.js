import Express from 'express'
import { getposts } from "../controllers/posts.js";

const  router = Express.Router();

router.get('/find/:userId', getposts)


export default router