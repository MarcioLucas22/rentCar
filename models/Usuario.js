const { Sequelize } = require('./db');
const db = require('./db')

const Usuario = db.sequelize.define(/*Nome da tabela*/'usuario', {
  //atributos / coluna
  id_usuario: {
    type: db.Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  nome: {
    type: db.Sequelize.STRING,
  },
  telefone: {
    type: db.Sequelize.STRING,
  },
  cpf: {
    type: db.Sequelize.STRING,
  },
  endereco: {
    type: db.Sequelize.STRING,
  },
  dataNascimento: {
    type: db.Sequelize.STRING,
  },
  email: {
    type: db.Sequelize.STRING,
  },
  senha: {
    type: db.Sequelize.STRING,
  }
});

//Usuario.sync({force: true});
module.exports = Usuario;