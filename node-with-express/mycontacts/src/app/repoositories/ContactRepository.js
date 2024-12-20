const { randomUUID } = require('node:crypto');

class ContactRepository {
  contacts = [
    {
      id: randomUUID(),
      name: 'Larissa',
      email: 'larrissa@exemple.com',
      phone: '12345678',
      category: randomUUID(),
    },
  ];

  findAll() {
    return new Promise((res) => {
      res(this.contacts);
    });
  }

  findByEmail(email) {
    return new Promise((res) => {
      const hasEmail = this.contacts.some((item) => item.email === email);
      res(hasEmail);
    });
  }

  create(data) {
    return new Promise((res) => {
      const dataWithId = {
        id: randomUUID(),
        ...data,
        category: randomUUID(),
      };
      this.contacts.push(dataWithId);
      res();
    });
  }

  findById(id) {
    const contact = this.contacts.find((item) => item.id === id);

    return new Promise((res) => {
      res(contact);
    });
  }

  updateContact(id, data) {
    return new Promise((res) => {
      const updateContact = this.contacts.map((item) => {
        if (item.id === id) {
          return { ...item, ...data };
        }

        return item;
      });

      this.contacts = updateContact;

      res(updateContact);
    });
  }

  delete(id) {
    return new Promise((res) => {
      const contactIndex = this.contacts.findIndex((item) => item.id === id);

      if (contactIndex !== -1) {
        this.contacts.splice(contactIndex, 1);
      }
      res();
    });
  }
}

module.exports = new ContactRepository();
