let contacts = [
  {
    id: 'a1',
    name: 'kewin',
    email: 'mail@mail.com'
  },
  {
    id: 'a2',
    name: 'jose',
    email: 'jose@mail.com'
  }
]

class ContactRepository {
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

  findByEmail (email) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.email === email)
    ))
  }

  create ({ id, name, email }) {
    return new Promise((resolve) => {
      const newContact = {
        id,
        name,
        email
      }
      contacts.push(newContact)
      resolve(newContact)
    })
  }

  delete (id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id)
      resolve()
    })
  }

  update (id, { name, email }) {
    return new Promise((resolve) => {
      const updatedContact = {
        id,
        name,
        email
      }

      contacts = contacts.map((contact) => (
        contact.id === id ? updatedContact : contact
      ))

      resolve(updatedContact)
    })
  }
}

module.exports = new ContactRepository()
