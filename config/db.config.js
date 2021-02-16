
// create here mysql conneciton
const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('node_mysql_crud_db', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        freezeTableName: true
      }
  });

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

sequelize.sync({ alter : true})
  .then(() => {
    console.log(`Database & tables created!`);
  });

module.exports =sequelize;