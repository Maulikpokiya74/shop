const {Sequelize, DataTypes} = require('sequelize');
const {sequelize} = require('../config/sequelize')

const customer = sequelize.define("customer",{
        id:{
            type : DataTypes.INTEGER,
            allowNull :false,
            primaryKey : true,
            autoIncrement : true
        },

        user_name :{
            type : DataTypes.STRING,
            allowNull : false
        },
        mobile : {
            type : DataTypes.INTEGER,
            allowNull : false
        },
        email :{
            type : DataTypes.STRING,
            allowNull : false
        },
    },
    {
       timestamps: false    
});

sequelize.sync();

console.log('customer inserted successfully');
