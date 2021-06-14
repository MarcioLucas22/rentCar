const { Sequelize } = require('./db');
const db = require('./db')

const Carro = db.sequelize.define(/*Nome da tabela*/'carro', {
  //atributos / coluna
  id_carro: {
    type: db.Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  ano: {
    type: db.Sequelize.INTEGER,
  },
  cor: {
    type: db.Sequelize.STRING,
  },
  marca: {
    type: db.Sequelize.STRING,
  },
  modelo: {
    type: db.Sequelize.STRING,
  },
  placa: {
    type: db.Sequelize.STRING,
  },
  valor: {
    type: db.Sequelize.DOUBLE,
  }
});

//Carro.sync({force: true});
module.exports = Carro;