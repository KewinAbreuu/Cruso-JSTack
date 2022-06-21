const ContactsRepository = require('../repositories/ContactsRepository')

class ContactController {
  async index (request, response) {
    // Listar todos os registros
    const Contacts = await ContactsRepository.findAll()
    response.json(Contacts)
  }

  async show (request, response) {
    // Obter UM registro
    const { id } = request.params
    const contact = await ContactsRepository.findById(id)

    if (!contact) {
      return response.status(404).json({ Error: 'Not Found' })
    }
    response.json(contact)
  }

  async store (request, response) {
    // Criar novo registro
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

  update () {
    // Editar um registro
  }

  async delete (request, response) {
    // Deletar um registro
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
