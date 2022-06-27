const db = require('../../database')

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
  async findAll () {
    const rows = await db.query(`SELECT * FROM contacts ORDER BY name ASC`)
    return rows
  }

  async findById (id) {
    const [row] = await db.query(`SELECT * FROM contacts WHERE id = $1`, [id])
    return row
  }

  async findByEmail (email) {
    const [row] = await db.query(`SELECT * FROM contacts WHERE email = $1`, [email])
    return row
  }

  async create ({ name, email, phone, category_id }) {
    const [row] = await db.query(`
    INSERT INTO contacts (name, email, phone, category_id)
    VALUES ($1, $2, $3, $4)
    RETURNING *
    `, [name, email, phone, category_id])

    return row
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
