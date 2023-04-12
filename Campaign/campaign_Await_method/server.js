const express = require("express")
require("dotenv").config();
const jwt = require("jsonwebtoken");
const app = express()
const cors = require('cors')
const router = require('./routes/campaign.router')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
app.use(cors({
    origin: ['http://localhost:4200/home', 'http://localhost:4200', 'http://localhost:8700', 'http://localhost:4567','http://192.168.29.246:4200','http://192.168.29.246:4200/home',"http://192.168.29.246:4567/home","http://192.168.29.246:4567"]
}));
app.post("/login", (req, res) => {
    const { username, password } = req.body;
    if (username === "admin" && password === "admin") {
        const token = jwt.sign({ username },
            process.env.JWT_SECRET_KEY,{expiresIn: 1800000});
        return res.json({ username, token, msg: "Login Success" });
    }
    else if(username === "jhghgusjbduyfuyluiegyvbcjhtyfduyblukybchvytfdyfedffyvuuvfydc" && password === "adhgccstdytfuyfsytfytytdstyddr45djtdmin")
    {
        const token = jwt.sign({ username },
            process.env.JWT_SECRET_KEY,{expiresIn: 1800});
        return res.json({ username, token, msg: "Login Success" });
    }
    return res.json({ msg: "Invalid Credentials" });
});
//middleware -allows us to relax the security applied to an API.
app.get('/', async (req, res) => {
    try {
        await res.status(200).send({ message: "Welcome to my app" })
    } catch (error) {
        await res.status(500).send(error.message)
        
    }
})
const verifyTokenMiddleware = (req, res, next) => {
    const token = req.header('Authorization').split(' ');
    console.log(token[1])
    if (!token) return res.status(403).json({
        msg: "No token present"
    }); 
    try {
        const decoded = jwt.verify(token[1],
            process.env.JWT_SECRET_KEY);
        req.user = decoded;
    } catch (err) {
        return res.status(401).json({
            msg: "Invalid Token"
        });
    }
    next();
};
app.use("/api", router);
app.listen(8703, async (req, res) => {
    try {
        await console.log("Your app running on port 8700");
    } catch (error) {
        json
        await console.log(error.message);
    }
})
