const Carro = require('./models/Carro')
const CarroRepository = require('./repositories/CarroRepository')

function main() {
    let repositorie = new CarroRepository()

    let carro = new Carro('Corsa Classic', '"Chevrolet', 2011, 'Cinza')

    repositorie.salvarCarro(carro)

    console.log('Carros: ', repositorie.listarCarros())
}

main()
