const campaignController=require('../controllers/campaignController')
const fetch = (...args) =>
    import('node-fetch').then(({ default: fetch }) => fetch(...args));
const router = require('express').Router()
const express = require('express')
const app = express()
router.get(`/hello`, async function (req, res) {
    const url = "https://dummyapi.io/data/v1/user"
    const options = {
        method: 'GET',
        headers: {
            'app-id': '63a53af2c874b7fdfa631484',
        }
    };
    fetch(url, options)
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.error('error:' + err));
    try {
        let response = await fetch(url, options);
        response = await response.json();
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: `Internal Server Error.` });
    }
});
router.post("/campaigns/create" ,campaignController.create);
router.get("/campaigns",campaignController.getAll);
router.get("/campaigns/:id",campaignController.findOne);
router.put("/campaigns/:id",campaignController.update);
router.delete("/campaigns/:id",campaignController.delete);
router.delete("/campaigns/deleteAll",campaignController.deleteAll);
router.post("/user/login" ,campaignController.createUser);
router.put("/user/logout:id",campaignController.logout);
router.get("/user/logs",campaignController.getLogs);
module.exports=router
