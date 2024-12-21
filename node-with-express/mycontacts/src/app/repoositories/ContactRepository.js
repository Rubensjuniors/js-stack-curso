const db = require('../../db');

class ContactRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await db.query(
      `SELECT contacts.*, categories.name AS category_name FROM contacts
      LEFT JOIN categories ON categories.id = contacts.category_id
      ORDER BY contacts.name ${direction}`,
    );

    return rows;
  }

  async findByEmail(email) {
    const [row] = await db.query('SELECT * FROM contacts WHERE email = $1', [
      email,
    ]);

    return row;
  }

  async create({
    name, email, phone, category_id: categoryID,
  }) {
    const [row] = await db.query(
      `INSERT INTO contacts(name, email, phone, category_id)
      VALUES ($1, $2, $3, $4) RETURNING *`,
      [name, email, phone, categoryID],
    );

    return row;
  }

  async findById(id) {
    const row = await db.query(
      `
      SELECT contacts.*, categories.name AS category_name FROM contacts
      JOIN categories ON categories.id = contacts.category_id
      WHERE contacts.id = $1`,
      [id],
    );
    return row;
  }

  async updateContact(id, data) {
    const keys = Object.keys(data).map(
      (key, index) => `${key} = $${index + 2}`,
    );
    const values = Object.keys(data).map((value) => data[value]);

    const [row] = await db.query(
      `
        UPDATE contacts
        SET ${keys.join(', ')} WHERE id = $1
      `,
      [id, ...values],
    );

    return row;
  }

  async delete(id) {
    const deleteOp = await db.query(
      `
        DELETE FROM contacts WHERE id = $1
      `,
      [id],
    );
    return deleteOp;
  }
}

module.exports = new ContactRepository();
