const sequelize=require('./index')
const {DataTypes, or}=require('sequelize')
const Campaign = sequelize.define("campaignlist", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        campaignName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: /^[^-\s][a-zA-Z_\s-]+$/,
                not:/[*|\":<>[\]{}`\\()';@&$]/
              }
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                isIn: [['Completed', 'Draft','Pending']] 
            }
        },
        Ctr: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    }, {
        timestamps: false
    });
  module.exports=Campaign