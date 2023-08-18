import { Router } from "express";
import {
  login,
  signup,
  logout,
  current,
} from "../controllers/sessionsController.js";
import auth from "../middlewares/auth.js";
import errorHandler from "../middlewares/errorHandler.js";

import authorization from "../middlewares/authorization.js";

const router = Router();

router.post("/login", login);
router.post("/signup", signup);
router.get("/current", auth, current);
router.delete("/logout/:id", logout);
router.get("/test", (req, res, next) => {
  throw new Error("este es un error");
});
//router.use(errorHandler);
export default router;
