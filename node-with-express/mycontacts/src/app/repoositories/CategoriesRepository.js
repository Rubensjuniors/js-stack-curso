const db = require('../../db');

class CategoriesRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await db.query(
      `SELECT * FROM categories ORDER BY name ${direction}`,
    );

    return rows;
  }

  async create({
    name,
  }) {
    const [row] = await db.query(
      `INSERT INTO categories(name)
      VALUES ($1) RETURNING *`,
      [name],
    );

    return row;
  }

  async findById(id) {
    const row = await db.query('SELECT * FROM categories WHERE id = $1', [id]);
    return row;
  }

  async findByName(name) {
    const [row] = await db.query('SELECT * FROM categories WHERE name = $1', [name]);
    return row;
  }

  async update(id, { name }) {
    const [row] = await db.query(
      `
        UPDATE categories
        SET name = $2 WHERE id = $1
      `,
      [id, name],
    );

    return row;
  }

  async delete(id) {
    const deleteOp = await db.query(
      `
        DELETE FROM categories WHERE id = $1
      `,
      [id],
    );
    return deleteOp;
  }
}

module.exports = new CategoriesRepository();
