const { v4 } = require('uuid')

let contacts = [
  {
    id: v4(),
    name: 'Kewin abreu',
    email: 'Teste@teste.com',
    phone: '987004799',
    category_id: v4()
  },
  {
    id: v4(),
    name: 'Jose  abreu',
    email: 'jose@teste.com',
    phone: '9870ss04799',
    category_id: v4()
  }
]

class ContactsRepository {
  findAll () {
    return new Promise((resolve) => {
      resolve(contacts)
    })
  }

  findById (id) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.id === id)
    ))
  }

  delete (id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id)
      resolve()
    })
  }
}

module.exports = new ContactsRepository()
