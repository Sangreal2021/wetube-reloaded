import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";

// create application
const PORT = 4000;
const app = express();
const logger = morgan("dev");
app.use(logger);

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);


// 외부 접속 listen
const handleListening = () => console.log(`✅ Server listening on port http://localhost:${PORT} 🎶`);
app.listen(PORT, handleListening); // listen(설정, 함수)