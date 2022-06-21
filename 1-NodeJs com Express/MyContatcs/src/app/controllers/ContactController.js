const ContactsRepository = require('../repositories/ContactsRepository')

class ContactController {
  // Listar todos os registros
  async index (request, response) {
    const Contacts = await ContactsRepository.findAll()
    response.json(Contacts)
  }

  // Obter UM registro
  async show (request, response) {
    const { id } = request.params
    const contact = await ContactsRepository.findById(id)

    if (!contact) {
      return response.status(404).json({ Error: 'Not Found' })
    }
    response.json(contact)
  }

  // Criar novo registro
  async store (request, response) {
    const { name, email, phone, category_id } = request.body

    // Validar campo name
    if (!name) {
      return response.status(400).json({ error: 'name is requeried' })
    }

    const contactExists = await ContactsRepository.findByEmail(email)

    if (contactExists) {
      return response.status(400).json({ error: 'email já existente' })
    }

    const contact = await ContactsRepository.create({
      name, email, phone, category_id
    })

    response.json(contact)
  }

  // Editar um registro
  async update (request, response) {
    const { id } = request.params
    const { name, email, phone, category_id } = request.body

    const contactExists = await ContactsRepository.findById(id)
    if (!contactExists) {
      return response.status(404).json({ error: 'not found' })
    }

    if (!name) {
      return response.status(400).json({ error: 'name is empty' })
    }

    const contactByEmail = await ContactsRepository.findByEmail(email)
    if (contactByEmail && contactByEmail.id !== id) {
      return response.status(400).json({ error: 'email já existente' })
    }

    const contact = await ContactsRepository.update(id, {
      name, email, phone, category_id
    })

    response.json(contact)
  }

  // Deletar um registro
  async delete (request, response) {
    const { id } = request.params

    const contact = await ContactsRepository.findById(id)

    if (!contact) {
      return response.status(404).json({ Error: 'Not Possible delete Found' })
    }
    await ContactsRepository.delete(id)
    // 204 no Content
    response.sendStatus(204)
  }
}

module.exports = new ContactController()
