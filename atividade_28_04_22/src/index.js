const Contact = require('./models/Contacts')
const AgendaRepositorie = require('./repositories/AgendaRepositorie')


function main() {
    let repositorie = new AgendaRepositorie()

    let contact = new Contact(
        1,
        'Jessika Aguiar',
        'jessika.developer@gmail.com',
        '984501818',
        'active',
        'friends'
    )

    repositorie.saveContact(contact)

    console.log('Contacts: ', repositorie.listarContactAll())
}
main()
