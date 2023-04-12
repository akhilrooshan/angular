const express = require("express")
const app = express()
const router = require('./router/routerapi')
app.use('/ara',router)
app.listen(6700, async (req, res) => {
    try {
        await console.log("Your app running on port 6700");
    } catch (error) {json
        await console.log(error.message);
    }
})
