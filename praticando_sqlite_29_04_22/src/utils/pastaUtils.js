const fs = require('fs');

function criarPastaSeNãoExistir(caminhoPasta) {
    if (!fs.existsSync(caminhoPasta)) {
        fs.mkdirSync(caminhoPasta)
    }
}

module.exports = { criarPastaSeNãoExistir }
