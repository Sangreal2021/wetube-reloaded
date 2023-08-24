import express from "express";
import morgan from "morgan";
// default이기 때문에 이름을 globalRouter가 아닌 다른것으로 써도 됨.
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";

// create application
const PORT = 4000;

// console.log(process.cwd());
const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);


// 외부 접속 listen
const handleListening = () => console.log(`✅ Server listening on port http://localhost:${PORT} 🎶`);
app.listen(PORT, handleListening); // listen(설정, 함수)