// const db = require('../models/campaign.model.js')
// const Campaign = db.Campaign
const Campaign = require("../models/campaign.model");
// const {campaign}=require('../models/campaign.model')
exports.create = (req, res) => {
    const { id, campaignName, status, Ctr, startDate, applicationCategory, applicationCategoryValues } = req.body
    const s = Campaign.create(req.body).then((data) => {
        res.json(data)
    }).catch((err) => {
        res(err)
    })
};
exports.getAll = (req, res) => {
    Campaign.findAll().then((data) => {
        res.json({ data })
    }).catch((err) => {
        console.log(err)
    })
};
exports.findOne = (req, res) => {
    const val = req.params.value;
    Campaign.findAll({ where: { status: val } }).then((data) => {
        res.json(data)
    }).catch((err) => {
        console.log(err)
    })
};
exports.update = (req, res) => {
};
exports.delete = (req, res) => {
    const varId = req.params.id;
    return campaign.destroy({ where: { id: varId } }).then((data) => {
        res.status(200).json(data)
    }).catch((err) => {
        console.log(err);
    })
};
exports.deleteAll = (req, res) => {
    return campaign.destroy({ where: {} }).then((data) => {
        res.status(200).json(data)
    }).catch((err) => {
        console.log(err);
    })
};