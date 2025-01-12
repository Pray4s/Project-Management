import {Router} from "express"
import { getTeams } from "../controllers/teamController";

const router = Router();

router.get("/", getTeams);
/*router.post("/", createProject)*/


export default router;