const Contact = require('../models/Contacts')

class AgendaRepositorie {
    constructor() {
        this._contacts = []
    }

    saveContact(newContact) {
        if (newContact instanceof Contact) {
            this._contacts.push(newContact)
        }
    }

    editContact(editContact) {
        if (editContact instanceof Contact) {
            this._contacts = this._contacts.map(contact => {
                if(contact.getId() === editContact.getId()) {
                    return editContact
                }
                return contact
            })
        }
    }

    listarContactAll() {
        return [...this._contacts]
    }

    removerContact(id) {
        this._contacts = this._contacts.filter(contact => contact.getId() != id)
    }

}

module.exports = AgendaRepositorie
