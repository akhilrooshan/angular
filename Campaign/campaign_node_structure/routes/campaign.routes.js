const campaigns = require("../controllers/controller.js");
var router = require("express").Router();
const express = require('express')
const app = express()
router.post("/campaigns/create", campaigns.create);
router.get("/campaigns", campaigns.getAll);
router.get("/campaigns/:id", campaigns.findOne);
router.put("/campaigns/:id", campaigns.update);
router.delete("/campaigns/:id", campaigns.delete);
router.delete("/campaigns/deleteAll", campaigns.deleteAll);
module.exports=router
