import {Router} from "express"
import { getUsers } from "../controllers/userController";

const router = Router();

router.get("/", getUsers);
/*router.post("/", createProject)*/


export default router;