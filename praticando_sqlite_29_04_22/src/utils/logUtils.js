function tratarErro(error) {
    if(error !== null) {
        console.error('Ocorreu um erro ao criar o banco de dados - ', error.message)
    }
}

module.exports = { tratarErro }
