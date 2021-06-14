const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const Carro = require('./models/Anuncio')
const Usuario = require('./models/Usuario')
const moment = require('moment')
const { sequelize } = require('./models/db')


app.use(express.static(__dirname + '/views'))
app.use(express.static(__dirname + '/public'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

sequelize.authenticate().then(function() {
  console.log('Conexão com o BD realizada com sucesso.')
}).catch(function(err) {
  console.log('Erro ao realizar a conexão: ' + err)
})

//app.get('/rent-car', function (req, res) {
  //Carro.findAll(/*{order: [['valor', 'DESC']]}*/).then(function (carros) {
    //res.render('rent-car', {
      //carros: carros.map(carro => carro.toJSON())
    //})
  //})
//})

app.get('/rent-car', function (req, res) {
  res.sendFile(__dirname + '/public/views/initial-page.html')
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
    res.redirect('/rent-car')
    //res.sendFile(__dirname + '/views/initial-page.html')
  }).catch(function (erro) {
    res.send('Erro ao efetuar cadastro: ' + erro)
  })
  //res.sendFile(__dirname + '/views/index.html')
})

app.get('/login', function (req, res) {
  res.sendFile(__dirname + '/public/views/index.html')
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

app.get('/cadastro', function (req, res) {
  res.sendFile(__dirname + '/public/views/cadastro.html')
})

app.get('/alugar', function (req, res) {
  res.sendFile(__dirname + '/public/views/alugar.html')
})

app.listen(3000, () => {
  console.log('Conectado na porta 3000')
})