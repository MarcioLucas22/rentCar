const { Sequelize } = require('./db');
const db = require('./db')

const Pagamento = db.sequelize.define(/*Nome da tabela*/'pagamento', {
  //atributos / coluna
  id_pagamento: {
    type: db.Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  num_cartao: {
    type: db.Sequelize.STRING,
  },
  validade: {
    type: db.Sequelize.STRING,
  },
  nome_titular: {
    type: db.Sequelize.STRING,
  },
  cpf: {
    type: db.Sequelize.STRING,
  },
});

//Pagamento.sync({force: true});
module.exports = Pagamento;