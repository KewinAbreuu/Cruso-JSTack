const CategoryRepository = require('../repositories/CategoryRepository')

class CategoryController {
  async index (request, response) {
    const category = await CategoryRepository.findAll()
    response.json(category)
  }

  async store (request, response) {
    const { name } = request.body

    if (!name) {
      return response.status(404).json({ error: "Name is Required" })
    }

    const category = await CategoryRepository.create({ name })
    response.json(category)
  }
}

module.exports = new CategoryController()
