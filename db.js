const Sequelize = require('sequelize');

const connectionString = process.env.DATABASE_URL || 'postgres://postgres:secret@localhost:5432/postgres';
const sequelize = new Sequelize(connectionString);

if (process.env.NODE_ENV !== 'production') {
  sequelize.sync()
    .then(() => {
      console.warn('Sequelize updated database schema');
    })
    .catch(console.error);
}

module.exports = sequelize;