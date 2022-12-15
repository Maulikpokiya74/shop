const {Sequelize, DataTypes} = require('sequelize');
const {sequelize} = require('../config/sequelize')

const product = sequelize.define("product",{
    id:{
        type : DataTypes.INTEGER,
        allowNull :false,
        primaryKey : true,
        autoIncrement : true
    },

        product_name :{
            type : DataTypes.STRING,
            allowNull : false
        },
        product_price : {
            type : DataTypes.INTEGER,
            allowNull : false
        }
    },
    {
       timestamps: false    
});

sequelize.sync();

console.log('product inserted successfully');
