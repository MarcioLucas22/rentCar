const Sequelize = require('sequelize');

const sequelize = new Sequelize('rentcar', 'marcioone', '68664411', {
  host: 'localhost',
  dialect:'mysql',
});

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize
}