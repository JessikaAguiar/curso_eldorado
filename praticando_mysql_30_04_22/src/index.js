const Carro = require('./models/Carro')
const CarroRepository = require('./repositories/CarroRepository')

async function main() {
    let repositorio = new CarroRepository()

    const carros = await repositorio.listarCarros()

    let carro = new Carro('Fusca', 'Wolks', 2012, 'Branco', 5)
    await repositorio.salvarCarro(carro)

    await repositorio.removerCarro(4)

    await repositorio.editarCarro(carro)

}
main()
