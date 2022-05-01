const Carro = require('./carro')
const Usuario = require('./usuario')

const database = require('./database')

async function main() {
    database.sync()
    
    // const { carro_id } = await Carro.create({
    //     carro_modelo: 'Fusca',
    //     carro_marca: 'Chevrolet',
    //     carro_ano: 2012,
    //     carro_cor: 'Amarelo'
    // })

    // console.log(carro_id)
    // const carros = await Carro.findAll()
    // const carro = carros[0]
    // carro.carro_modelo = 'Meriva'
    // await carro.save()

    // await carro.destroy()

    // await carro.destroy({
    //     where: {
    //         carro_ano: 2012
    //     }
    // })

}

main()
