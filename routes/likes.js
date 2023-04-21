import Express from 'express'
import { getlikes } from "../controllers/likes.js";

const  router = Express.Router();

router.get('/find/:userId', getlikes)



export default router