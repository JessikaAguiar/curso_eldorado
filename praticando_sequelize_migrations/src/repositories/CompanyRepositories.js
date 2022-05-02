const Company = require('../database/models/Compony')

class CompanyRepository {
    async add(company) {
        try {
            return await Company.create(company)
        } catch (error) {
            console.log('Erro ao Salvar Company - ', error)
        }
    }

    async selectAll() {
        try {
            return await Company.findAll()
        } catch (error) {
            console.log('Erro ao listar Marcas - ', error)
        }
    }

    async selectByFilter(filter) {
        try {
            return await Company.findAll({
                where: filter
            })
        } catch (error) {
            console.log('Erro ao listar por filtro Marcas - ', error)
        }
    }

    async update(company) {
        try {
            return await Company.save()
        } catch (error) {
            console.log('Erro ao Editar Marca - ', error)
        }
    }

    async remove(id) {
        try {
            return await Company.destroy({
                where: { id }
            })
        } catch (error) {
            console.log('Erro ao Excluir Marca - ', error)
        }
    }
}

module.exports = CompanyRepository
