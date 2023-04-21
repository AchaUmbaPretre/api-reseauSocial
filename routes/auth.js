import Express from "express"
import { getauth } from "../controllers/auth.js";

const  router = Express.Router();

router.get('/find/:userId', getauth)


export default router