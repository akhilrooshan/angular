const db = require('../models/campaignmodels')
//Create and Save a new campaign
exports.create = async (req, res) => {
    try {
        const { id, campaignName, status, Ctr, startDate, applicationCategory, applicationCategoryValues } = req.body
        const data = await db.create(req.body)
        return await res.status(200).send(data)
    } catch (error) {
        return await res.status(500).send(error.message)
    }
};
//get all campaigns which existing
exports.getAll = async (req, res) => {
    try {
        const data = await db.findAll()
        return await res.json({ data })
    } catch (error) {
        return await res.status(500).send(error.message)
    }
};
//find the specific campaign by id
exports.findOne = async (req, res) => {
    try {
        const val = req.params.id;
        const data = await db.findAll({ where: { id:val} })
        return await res.json({ data })
    } catch (error) {
        return await res.status(500).send(error.message)
    }
};
//update the specific campaign by id
exports.update = async (req, res) => {
    try {
        const val =req.params.id;
        const data= await db.update(req.body,{where:{id:val}})
        return await res.json({ data })
    } catch (error) {
        return await res.status(500).send(error.message)
    }
};
//delete the specific campaign by id
exports.delete = async (req, res) => {
    const varId = req.params.id;
    try {
        const data = await db.destroy({ where: { id: varId } });
        res.status(200).json(data);
    } catch (error) {
        return await res.status(500).send(error.message)
    }
};
//delete all campaign stored
exports.deleteAll = async (req, res) => {
    try {
        const data = await db.destroy({ where: {} });
        res.status(200).json(data);
    } catch (error) {
        return await res.status(500).send(error.message)
    }
};