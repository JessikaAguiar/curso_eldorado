const fs = require('fs');

function criarPastaSeNÃ£oExistir(caminhoPasta) {
    if (!fs.existsSync(caminhoPasta)) {
        fs.mkdirSync(caminhoPasta)
    }
}

module.exports = { criarPastaSeNÃ£oExistir }
