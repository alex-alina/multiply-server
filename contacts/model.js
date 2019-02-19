const Sequelize = require('sequelize');
const sequelize = require('../db');

const Contact = sequelize.define('contact', {
  email : {
    type: Sequelize.STRING,
    field: 'email',
    allownull: false,
    validate: {
      isEmail: true
    }
  }
}, 
{
  tableName: 'contacts'
});

module.exports = Contact;