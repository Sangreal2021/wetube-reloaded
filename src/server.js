import express from "express";
import morgan from "morgan";
// create application
const PORT = 4000;
const app = express();
const logger = morgan("dev");

// application 설정
// MW


const home = (req, res) => {
    console.log("I will respond");
    return res.send("<h1>I know Middlewares</h1>");
};
const login = (req, res) => {
    return res.send("login");
}
// 아래 코드는 반드시 순서대로
app.use(logger);
app.get("/", home);
app.get("/login", login);

const handleLogin = (req, res) => {
    return res.send("Login here.");
};
app.get("/login", handleLogin); // 요청을 받아 함수를 실행


// 외부 접속 listen
const handleListening = () => console.log(`✅ Server listening on port http://localhost:${PORT} 🎶`);
app.listen(PORT, handleListening); // listen(설정, 함수)