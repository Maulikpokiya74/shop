const {Sequelize, DataTypes} = require('sequelize');
const {sequelize} = require('../config/sequelize')

const order = sequelize.define("order",{
    id:{
        type : DataTypes.INTEGER,
        allowNull :false,
        primaryKey : true,
        autoIncrement : true
    },
    product_id: {
        type: Sequelize.INTEGER(11),
        allowNull : false,
        references : {
         model :'products',
         key : 'id'
        }
      },
    user_id: {
        type: Sequelize.INTEGER(11),
        allowNull : false,
        references : {
         model :'customers',
         key : 'id'
        }
      },
    
    },
    {
       timestamps: false    
});

sequelize.sync();

console.log('order inserted successfully');
