const sqlite = require('sqlite3')
const { tratarErro } = require("../utils/logUtils");
const { criarPastaSeNãoExistir } = require("../utils/pastaUtils");

const CAMINHO_PASTA_BANCO_DADOS = './src/database';
const CAMINHO_BANCO_DADOS = './src/database/database.db';

function criarBanco() {
    criarPastaSeNãoExistir(CAMINHO_PASTA_BANCO_DADOS)

    let bancoDeDados = new sqlite.Database(CAMINHO_BANCO_DADOS, tratarErro)

    bancoDeDados.run(`
      CREATE TABLE IF NOT EXISTS carros (
        carro_id INTEGER PRIMARY KEY AUTOINCREMENT,
        carro_modelo TEXT NOT NULL,
        carro_marca TEXT NOT NULL,
        carro_ano INTEGER NOT NULL,
        carro_cor TEXT NOT NULL
      )
    `, tratarErro)
}

module.exports = { criarBanco }
