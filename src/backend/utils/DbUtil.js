const mariadb = require("mariadb");

class db {
  constructor(poolOptions) {
    const pool = this.createPool(poolOptions);
    this.#testPool(pool).then((pass) => {
      if (pass) this.pool = pool;
    });
  }

  createPool(poolOptions) {
    return mariadb.createPool(poolOptions);
  }

  async #testPool(pool) {
    try {
      const conn = await pool.getConnection();
      try {
        await conn.ping();
        console.log("Database connection successful.");
        return true;
      } catch (pingErr) {
        console.error(
          "Error in connected database configuration: ",
          pingErr.message
        );
        return false;
      }
    } catch (connectionErr) {
      console.error(
        "Error establishing database connection: ",
        connectionErr.message
      );
      return false;
    }
  }

  // Select from table using given filters
  async select(table, { filters = null, filterParams = [] } = {}) {
    try {
      let query = "SELECT * FROM " + table;
      if (filters) {
        query += " WHERE ";
        for (let filter of filters) {
          query += `${filter} AND `;
        }
        query = query.slice(0, query.length - 5);
      }
      query += ";";
      const output = await this.pool.query(query, filterParams);
      return output;
    } catch (e) {
      console.error("db.select error: ", e);
      throw e;
    }
  }

  // Insert values into table
  async insert(table, item) {
    try {
      let query = "INSERT INTO " + table + " (";
      let queryParams = [];
      for (let key in item) {
        query += `${key}, `;
      }
      query = query.slice(0, query.length - 2);
      query += ")\nVALUES (";
      for (let key in item) {
        query += "?, ";
        queryParams.push(item[key]);
      }
      query = query.slice(0, query.length - 2);
      query += ");";
      const output = await this.pool.query(query, queryParams);
      return output;
    } catch (e) {
      console.error("db.insert error: ", e);
      throw e;
    }
  }

  // Delete from table elements which match given filters
  async delete(table, { filters, filterParams }) {
    try {
      if (!filters || filters.length === 0) {
        throw new Error("db.delete requires a filter parameter.");
      }
      let query = "DELETE FROM " + table + " WHERE ";
      for (let filter of filters) {
        query += `${filter} AND `;
      }
      query = query.slice(0, query.length - 5);
      query += ";";
      const output = await this.pool.query(query, filterParams);
      return output;
    } catch (e) {
      console.error("db.insert error: ", e);
      throw e;
    }
  }

  async waterPlant(id, ownerId) {
    try {
      const waterDateTime = new Date(Date.now())
        .toISOString()
        .replace("T", " ")
        .replace("Z", "");
      return await this.pool.query(
        "UPDATE Plant SET last_watered=? WHERE id=? AND owner_id=?",
        [waterDateTime, id, ownerId]
      );
    } catch (e) {
      console.error("db.waterPlant error: ", e);
      throw e;
    }
  }

  async editPlant(
    id,
    ownerId,
    { species, subtitle, notes, watering_interval }
  ) {
    try {
      return await this.pool.query(
        "UPDATE Plant SET species=?, subtitle=?, notes=?, watering_interval=? WHERE id=? AND owner_id=?",
        [species, subtitle, notes, watering_interval, id, ownerId]
      );
    } catch (e) {
      console.error("db.editPlant error: ", e);
      throw e;
    }
  }
}

module.exports = db;
