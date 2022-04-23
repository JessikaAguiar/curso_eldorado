const sqlite = require('sqlite3')

function tratarErro(error) {
    if(error !== null) {
        console.error('Ocorreu um erro ao criar o banco de dados - ', error.message)
    }
}

let bancoDeDados = new sqlite.Database('src/database/database.db', tratarErro)

bancoDeDados.run(`
    CREATE TABLE IF NOT EXISTS carros (
        carro_id INTEGER PRIMARY KEY AUTOINCREMENT,
        carro_modelo TEXT NOT NULL,
        carro_marca TEXT NOT NULL,
        carro_ano INTERGER NOT NULL,
        carro_cor TEXT NOT NULL
    )
`, tratarErro)

bancoDeDados.run(`
    INSERT INTO carros (
        carro_modelo,
        carro_marca,
        carro_ano,
        carro_cor
    ) VALUES (
        'Classic',
        'Chevrolet',
         2012,
        'Cinza'
    )`, tratarErro)

bancoDeDados.all(`
    SELECT * FROM carros
`, function (err, rows) {
    console.log(rows)
})

bancoDeDados.each(`
    SELECT * FROM carros
`, function (err, row) {
    console.log('Item:', row)
})

bancoDeDados.get(`
    SELECT * FROM carros
`, function (err, row) {
    console.log('somente um', row)
})

bancoDeDados.run(`
    UPDATE carros SET carro_modelo = 'Classic' WHERE carro_id = 1
`, tratarErro)

bancoDeDados.run(`
    DELETE FROM carros WHERE carro_id = 1
`, tratarErro)

