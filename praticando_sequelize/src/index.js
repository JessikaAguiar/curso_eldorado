const Carro = require('./database/models/carro')
const Usuario = require('./database/models/usuario')
const Marca = require('./database/models/Marca')
const MarcaRepository = require('./repositories/MarcaRepository')
const db = require('./database/database')

async function main() {
    const marcaRepository = new MarcaRepository()
    // await marcaRepository.salvar({nome: 'Fiat'})

    const marcas = await Marca.findAll({ include: [ { model: Carro }]})
    console.log(marcas)
    // const carro = Carro.create({
    //     modelo: 'Fusca',
    //     marca_id: 1,
    //     ano: 2012,
    //     cor: 'Amarelo'
    // })
}

main()
