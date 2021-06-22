const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const Carro = require('./models/Anuncio')
const Usuario = require('./models/Usuario')
const Pagamento = require('./models/Pagamento')
const moment = require('moment')
const path = require('path')
const handlebars = require('express-handlebars')
const { sequelize } = require('./models/db')

app.use(express.static(__dirname + '/views'))
app.use(express.static(__dirname + '/public'))

app.engine('handlebars', handlebars({
  defaultLayout: 'main',
  helpers: {
    formatDate: (date) => {
      return moment(date).format('DD/MM/YYYY')
    },

    formatValue: (value) => {
      return value/10
    }
  }
}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/cars', function (req, res) {
  Carro.findAll(/*{order: [['valor', 'DESC']]}*/).then(function (carros) {
    res.render('cars', {
      carros: carros.map(carro => carro.toJSON())
    })
  })
})

app.get('/car', function (req, res) {
  Carro.findAll(/*{order: [['valor', 'DESC']]}*/).then(function (carros) {
    res.render('alugar', {
      carros: carros.map(carro => carro.toJSON())
    })
  })
})

app.get('/cars', (req, res) => {
  res.redirect('cars')
})

app.get('/cadastro', function (req, res) {
  res.sendFile(__dirname + '/public/views/cadastro.html')
})

app.get('/car', (req, res) => {
  res.redirect('alugar')
})

app.get('/alugar', (req, res) => {
  res.sendFile(__dirname + '/public/views/pagamento.html')
})

app.get('/rentCar', function (req, res) {
  res.sendFile(__dirname + "/public/views/initial-page.html")
})

app.get('/login', function (req, res) {
  res.sendFile(__dirname + '/public/views/index.html')
})

app.post('/add-carro', function (req, res) {
  Carro.create({
    ano: req.body.ano,
    cor: req.body.cor,
    marca: req.body.marca,
    modelo: req.body.modelo,
    placa: req.body.placa,
    valor: req.body.valor,
  }).then(function () {
    res.redirect('/cars')
  }).catch(function (erro) {
    res.send('Erro ao efetuar cadastro: ' + erro)
  })
})

app.post('/add-usuario', function (req, res) {
  Usuario.create({
    nome: req.body.nome,
    telefone: req.body.telefone,
    cpf: req.body.cpf,
    endereco: req.body.endereco,
    dataNascimento: req.body.dataNascimento,
    email: req.body.email,
    senha: req.body.senha
  }).then(function () {
    res.redirect('/login')
    //res.sendFile(__dirname + '/views/initial-page.html')
  }).catch(function (erro) {
    res.send('Erro ao efetuar cadastro: ' + erro)
  })
  //res.sendFile(__dirname + '/views/index.html')
})

app.post('/add-pagamento', function (req, res) {
  Pagamento.create({
    num_cartao: req.body.num_cartao,
    validade: req.body.validade,
    nome_titular: req.body.nome_titular,
    cpf: req.body.cpf,
  }).then(function () {
    res.redirect('/rentCar')
  }).catch(function (erro) {
    res.send('Erro ao efetuar cadastro: ' + erro)
  })
})

sequelize.authenticate().then(function () {
  console.log('Conexão com o BD realizada com sucesso.')
}).catch(function (err) {
  console.log('Erro ao realizar a conexão: ' + err)
})

app.listen(3000, () => {
  console.log('Conectado na porta 3000')
})