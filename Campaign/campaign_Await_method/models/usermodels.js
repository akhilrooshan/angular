const sequelize=require('./index')
const {DataTypes }=require('sequelize')
const userlogin=sequelize.define("userLogin",{
    id:{
        type: DataTypes.DOUBLE,
        primaryKey: true,
        autoIncrement:true
    },
    firstName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    lastName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    loginTime:{
        type:DataTypes.STRING,
        allowNull:false
    },
    logoutTime:{
        type:DataTypes.STRING,
        allowNull:false
    },
}, {
    timestamps:false
})
module.exports=userlogin