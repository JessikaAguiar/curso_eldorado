const CarModel = require('../database/models/CarModel')

class CarRepository {
    async add(car) {
        try {
            return await CarModel.create(car)
        } catch (error) {
            console.log('Erro ao Salvar Company - ', error)
        }
    }

    async selectAll() {
        try {
            return await CarModel.findAll()
        } catch (error) {
            console.log('Erro ao listar Marcas - ', error)
        }
    }

    async selectByFilter(filter) {
        try {
            return await CarModel.findAll({
                where: filter
            })
        } catch (error) {
            console.log('Erro ao listar por filtro Marcas - ', error)
        }
    }

    async update(car) {
        try {
            return await CarModel.save()
        } catch (error) {
            console.log('Erro ao Editar Marca - ', error)
        }
    }

    async remove(id) {
        try {
            return await CarModel.destroy({
                where: { id }
            })
        } catch (error) {
            console.log('Erro ao Excluir Marca - ', error)
        }
    }
}

module.exports = CarRepository
