const express = require('express')
const app = express()

app.get('/api/usuarios', (req, res) => {
  const usuarios = [{
    id: 1,
    nome: "Fulano",
    sobrenome: "da Silva"
  },
  {
    id: 2,
    nome: "Ciclano",
    sobrenome: "Reis"
  },
  {
    id: 3,
    nome: "Beltrano",
    sobrenome: "Santos"
  },
  {
    id: 4,
    nome: "Abirosvaldo",
    sobrenome: "Oswaldo Junior"
  }
  ]
  res.json(usuarios)
})

const port = 5000
app.listen(port, () => console.log(`Servidor executando na porta ${port}`))