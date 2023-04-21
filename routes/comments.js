import Express from 'express'
import { getcomments } from "../controllers/comments.js";

const  router = Express.Router();

router.get('/find/:userId', getcomments)





export default router