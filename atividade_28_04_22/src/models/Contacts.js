class Contact {
    constructor(id, name, email, telefone, status, type) {
        this._id = id
        this._name = name
        this._email = email
        this._fone = telefone
        this._status = status
        this._type = type
    }

    getId() {
        return this._id
    }

    setId(id) {
        this._id = id
    }

    getName() {
        return this._name
    }

    setName(name) {
        this._name = name
    }

    getEmail() {
        return this._email
    }

    setEmail(email) {
        this._email = email
    }

    getFone() {
        return this._fone
    }

    setFone(fone) {
        this._fone = fone
    }

    getStatus() {
        return this._status
    }

    setStatus(status) {
        this._status = status
    }

    getType() {
        return this._type
    }

    setType(type) {
        this._type = type
    }
}

module.exports = Contact
