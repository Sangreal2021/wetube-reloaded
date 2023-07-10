import express from "express";
// create application
const PORT = 4000;
const app = express();

// application 설정
// MW
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`); // req.url = 루트(/)
    next();
}

const handleHome = (req, res) => {
    return res.send("I know middlewares");
}
app.get("/", logger, handleHome);

const handleLogin = (req, res) => {
    return res.send("Login here.");
}
app.get("/login", handleLogin);


// 외부 접속 listen
const handleListening = () => console.log(`✅ Server listening on port http://localhost:${PORT} 🎶`);
app.listen(PORT, handleListening);