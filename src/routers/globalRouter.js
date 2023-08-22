import express from "express";
import { join, login } from "../controllers/userController";
import { trending, search } from "../controllers/videoController";

const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
// globalRouter.get("/search", search);

// 다른 파일에서 이 라우터를 import하려면 아래처럼 export해야함.
export default globalRouter;