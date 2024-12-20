const ContactRepository = require('../repoositories/ContactRepository');

class ContactCotroller {
  async index(request, response) {
    try {
      const contacts = await ContactRepository.findAll();
      response.json(contacts);
    } catch (err) {
      throw new Error(`Error: ${err}`);
    }
  }

  async show(request, response) {
    const { id } = request.params;
    const contact = await ContactRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'User Not found!' });
    }

    return response.json(contact);
  }

  async store(request, response) {
    const data = request.body;

    const email = await ContactRepository.findByEmail(data.email);

    if (email) {
      return response.status(409).json({ message: 'Email Already Exist' });
    }

    await ContactRepository.create(data);

    return response.sendStatus(201);
  }

  async update(request, response) {
    const { id } = request.params;
    const data = request.body;

    const contact = await ContactRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'User Not found!' });
    }

    const email = await ContactRepository.findByEmail(data.email);

    if (email) {
      return response.status(409).json({ message: 'Email Already Exist' });
    }

    await ContactRepository.updateContact(id, { ...data });

    return response.sendStatus(200);
  }

  async delete(request, response) {
    const { id } = request.params;
    await ContactRepository.delete(id);

    return response.sendStatus(204);
  }
}

module.exports = new ContactCotroller();