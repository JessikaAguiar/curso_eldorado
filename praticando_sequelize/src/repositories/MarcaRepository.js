const Marca = require('../database/models/Marca')

class MarcaRepository {
    async salvar (marca) {
        try {
            return await Marca.create(marca)
        } catch (error) {
            console.log('Erro ao Salvar Marca - ', error)
        }
    }

    async selecionarTodos() {
        try {
            return await Marca.findAll()
        } catch (error) {
            console.log('Erro ao listar Marcas - ', error)
        }
    }

    async selecionarPorFiltro(filtro) {
        try {
            return await Marca.findAll({
                where: filtro
            })
        } catch (error) {
            console.log('Erro ao listar por filtro Marcas - ', error)
        }
    }

    async editar(marca) {
        try {
            return await Marca.save()
        } catch (error) {
            console.log('Erro ao Editar Marca - ', error)
        }
    }

    async remover(id) {
        try {
            return await Marca.destroy({
                where: { id }
            })
        } catch (error) {
            console.log('Erro ao Excluir Marca - ', error)
        }
    }
}

module.exports = MarcaRepository
