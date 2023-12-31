import { Router } from "express";
import {
  list,
  deleteOne,
  getOne,
  save,
  update,
  updateRol,
  addDocuments,
} from "../controllers/usersController.js";
import auth from "../middlewares/auth.js";
import authorization from "../middlewares/authorization.js";
import { uploader } from "../middlewares/multer.js";

const userRouter = Router();

userRouter.get("/", auth, authorization("getUsers"), list);
userRouter.get("/:id", auth, authorization("getUser"), getOne);
userRouter.post("/", auth, authorization("saveUser"), save);
userRouter.put("/:id", auth, authorization("updateUser"), update);
userRouter.put("/premium/:id", auth, authorization("updateRol"), updateRol);
userRouter.post("/:id/documents", uploader.single("reference"), addDocuments);
userRouter.delete("/:id", auth, authorization("deleteUser"), deleteOne);

export default userRouter;
