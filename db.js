const Sequelize = require('sequelize')

const connectionString = process.env.DATABASE_URL || 'postgres://postgres:secret@localhost:5432/postgres'
const sequelize = new Sequelize(connectionString, {define: { timestamps: false }})
//don't use sync in production
//add if clause to not sync if production
sequelize.sync()
  .then(() => {
    console.log('Sequelize updated database schema')
  })
  .catch(console.error)

module.exports = sequelize
