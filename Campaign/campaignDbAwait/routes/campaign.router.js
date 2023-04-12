const campaignController=require('../controllers/campaignController')
const router = require('express').Router()
const express = require('express')
const app = express()
router.post("/campaigns/create",campaignController.create);
router.get("/campaigns", campaignController.getAll);
router.get("/campaigns/:id",campaignController.findOne);
router.put("/campaigns/:id", campaignController.update);
router.delete("/campaigns/:id", campaignController.delete);
router.delete("/campaigns/deleteAll", campaignController.deleteAll);
module.exports=router