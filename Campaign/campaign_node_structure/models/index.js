const dbConfig = require("../config/db.config.js")
const {Sequelize,DataTypes} = require('sequelize')
const sequelize= new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD,{
    dialect:dbConfig.DIALECT,
    Port:dbConfig.Port,
    host:dbConfig.HOST
})
sequelize.authenticate().then(()=>{
    console.log("Connected");
}).catch((error)=>{
    console.log(error);
})
sequelize.sync({alter:true})
  .then(() => {
    console.log("Synced database.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });
// const db={}
// db.Sequelize=Sequelize;
// db.sequelize=sequelize;
// db.campaigns=require( "./campaign.model.js")
// db.sequelize.sync({alter:true}).then(()=>{
//     console.log('re sync is done');
// })
module.exports=sequelize