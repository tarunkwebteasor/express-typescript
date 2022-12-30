import { Router } from "express";
import User from "../controller/user";
const router: Router =  Router();

router.get("/", User.getAll);

export default router;