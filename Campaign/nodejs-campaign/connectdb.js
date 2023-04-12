const Sequelize = require('sequelize');
const { DataTypes } = Sequelize
const seq = new Sequelize('campaignDB', 'postgres', 'postgres', {
    dialect: 'postgres',
    Host: 'localhost',
    Port: 5432,
});
seq.authenticate().then(() => {
    console.log("connection succesful");
}).catch((err) => {
    console.log("Error connecting to database")
});
const campaign = seq.define('campaignlist', {
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
}, {
    initialAutoIncrement: 100,
});
campaign.sync({ alter: true }).then((data) => {
    // return campaign.bulkCreate([
    //     {
    //         campaignName:'Akhil',
    //         status:'Completed',
    //         Ctr:2.1,
    //         startDate:'Tue Dec 15 2022 11:13:34 GMT+0530 (India Standard Time)'
    //     },
    //     {
    //         campaignName:'Roushan',
    //         status:'Pending',
    //         Ctr:2.5,
    //         startDate:'Sun feb 24 2022 11:13:34 GMT+0530 (India Standard Time)'
    //     },
    //     {
    //         campaignName:'John',
    //         status:'Completed',
    //         Ctr:1.1,
    //         startDate:'Thu mar 12 2022 11:13:34 GMT+0530 (India Standard Time)'
    //     },
    //     {
    //         campaignName:'Doe',
    //         status:'Draft',
    //         Ctr:2.1,
    //         startDate:'fri Dec 05 2022 11:13:34 GMT+0530 (India Standard Time)'
    //     }
    // ])
}).catch((err) => {
    console.log("table sync error")
});
module.exports = campaign