const express = require("express");
const router = require("./routes/campaign.routes.js");
const core = require('cors')
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', router);
app.get("/", (req, res) => {
  res.json({ message: "hello" });
});
var coreOption = {
  origin:'https:localhost:8000'
}
app.use(core(coreOption))
  app.listen(8700, () => {
    console.log(`Server is running on port 8700.`);
  });