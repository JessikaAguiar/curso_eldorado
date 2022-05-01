const Carro = require('./models/Carro')
const CarroRepository = require('./repositories/CarroRepository')
const { criarBanco } = require('./utils/criarBancoUtils')
function main() {
    criarBanco()
    let repositorie = new CarroRepository()

    let carro = new Carro('Corsa Classic', 'Chevrolet', 2011, 'Cinza')
    let carro2 = new Carro('Fusca', 'Chevrolet', 2012, 'Branco')
    let carro3 = new Carro('Combi', 'Chevrolet', 2011, 'Preto')

    repositorie.salvarCarro(carro)
    repositorie.salvarCarro(carro2)
    repositorie.salvarCarro(carro3)

    repositorie.listarCarros(function (carros) {
        for (const carro of carros) {
            console.log(carro)
            repositorie.removerCarro( 1)

            carro.setModelo('Sem Modelo')
            repositorie.editarCarro(carro)
        }
    })

    repositorie.filtrarCarrosPorAno(2012, carros => {
        console.log(carros)
    })
}

main()
