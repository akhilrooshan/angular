// module.exports = (sequelize, DataTypes) => {
const { DataTypes } = require('sequelize')
// const {Sequelize}=require('sequelize');
const sequelize = require('.');
// const db = require('.');
const Campaign = sequelize.define("campaignlist", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    campaignName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Ctr: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    startDate: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'fri Dec 05 2022 11:13:34 GMT+0530 (India Standard Time)'
    },
    applicationCategory: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    applicationCategoryValues: {
        type: DataTypes.ARRAY(DataTypes.STRING),
    }
}, {
    timestamps: false
});
    // return Campaign;
//   };
module.exports=Campaign