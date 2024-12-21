const CategoriesRepository = require('../repoositories/CategoriesRepository');

class CategoriesControllers {
  async index(request, response) {
    const { orderBy } = request.query;
    const category = await CategoriesRepository.findAll(orderBy);
    response.json(category);
  }

  async show(request, response) {
    const { id } = request.params;
    const category = await CategoriesRepository.findById(id);

    if (!category) {
      return response.status(404).json({ error: 'Category Not found!' });
    }

    return response.json(category);
  }

  async store(request, response) {
    const { name } = request.body;

    const categoryName = await CategoriesRepository.findByName(name);

    if (categoryName) {
      return response.status(409).json({ message: 'Name Already Exist' });
    }

    const category = await CategoriesRepository.create({ name });

    return response.json(category);
  }

  async update(request, response) {
    const { id } = request.params;
    const { name } = request.body;

    const category = await CategoriesRepository.findById(id);

    if (!category) {
      return response.status(404).json({ error: 'Category Not found!' });
    }

    const categoryName = await CategoriesRepository.findByName(name);

    if (categoryName) {
      return response.status(409).json({ message: 'Category Already Exist' });
    }

    await CategoriesRepository.update(id, { name });

    return response.sendStatus(200);
  }

  async delete(request, response) {
    const { id } = request.params;
    await CategoriesRepository.delete(id);

    return response.sendStatus(204);
  }
}

module.exports = new CategoriesControllers();
