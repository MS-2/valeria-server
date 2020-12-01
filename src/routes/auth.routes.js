import { Router } from "express";
const router = Router();

import * as control from '../controllers/auth.controller';
import { checkDuplicateUsernameOrEmail, checkRolesExisted } from "../middlewares";


router.post("/signup", [checkDuplicateUsernameOrEmail, checkRolesExisted], control.signUp);

router.post("/signin", control.signin);

export default router;