const express = require("express")
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
//middleware -allows us to relax the security applied to an API.
app.use(cors({
    origin: ['http://localhost:4200/home', 'http://localhost:4200']
}));
app.use('/api',router)
app.get('/', async (req, res) => {
    try {
        await res.status(200).send({ message: "Welcome to my app" })
    } catch (error) {
        await res.status(500).send(error.message)
    }
})
app.listen(8700, async (req, res) => {
    try {
        await console.log("Your app running on port 8000");
    } catch (error) {json
        await console.log(error.message);
    }
})
