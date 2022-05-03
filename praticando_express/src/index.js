const express = require('express')

const app = express()

app.use(express.json())

const carros = [
    { id: 1, modelo: 'Versa', ano: 2020 },
    { id: 2, modelo: 'Honda Civic', ano: 2021 },
    { id: 3, modelo: 'Cruza', ano: 2018 },
    { id: 4, modelo: 'Kicks', ano: 2019 }
]

app.get('/buscarCarros', (request, response) => {
    return response.json({ carros })
})

app.get('/buscarCarros/:id', (request, response) => {
    const id = request.params.id
    return response.json({ carros: carros.filter(carro => carro.id === parseInt(id)) })
})

app.listen(3333, () => {
    console.log('Servidor rodando em http://localhost:3333')
})
