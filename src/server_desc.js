import express from "express";
// create application
const PORT = 4000;
const app = express();

// application 설정
// MW
const logger = (req, res, next) => {
    // console.log("I'm in the middle!");
    // return res.send("I have the power now - middleware -"); // handleHome으로 넘어가지 않음
    console.log(`${req.method} ${req.url}`); // req.url = 루트(/)
    next();
}
// MW
const privateMiddleware = (req, res, next) => {
    const url = req.url;
    if(url === "/protected"){
        return res.send("<h1>Not Allowed</h1>");
    }
    console.log("Allowed, you may continue.");
    next();
}

const handleProtected = (req, res) => {
    return res.send("Welcome to the private Lounge.");
}

const handleHome = (req, res) => {
    // console.log(res);
    // return res.end(); // 서버가 response를 끝냄
    // return res.send("<h1>I wanna GO!!</h1>");
    // return res.send({ message: "I wanna GO!!"});
    // return res.end();
    return res.send("I know middlewares");
    // next();
}
app.use(logger);
app.use(privateMiddleware);
app.get("/", handleHome);
app.get("/protected", handleProtected);

const handleLogin = (req, res) => {
    return res.send("Login here.");
}
app.get("/login", handleLogin);


// 외부 접속 listen
const handleListening = () => console.log(`✅ Server listening on port http://localhost:${PORT} 🎶`);
app.listen(PORT, handleListening);