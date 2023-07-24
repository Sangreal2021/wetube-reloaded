import express from "express";
import morgan from "morgan";

// create application
const PORT = 4000;
const app = express();
const logger = morgan("dev");
app.use(logger);

// application 설정
// MW
const globalRouter = express.Router();
const handleHome = (req, res) => res.send("Home");
globalRouter.get("/", handleHome);

const userRouter = express.Router();
const HandleEditUser = (req, res) => res.send("Edit User");
userRouter.get("/edit", HandleEditUser);

const videoRouter = express.Router();
const HandleWatchVideo = (req, res) => res.send("Watch Video");
videoRouter.get("/watch", HandleWatchVideo);

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);


// 외부 접속 listen
const handleListening = () => console.log(`✅ Server listening on port http://localhost:${PORT} 🎶`);
app.listen(PORT, handleListening); // listen(설정, 함수)