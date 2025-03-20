require("dotenv").config();
const pg = require("pg");
const Pool = pg.Pool;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
// Get All Data
async function getData() {
  const client = await pool.connect();
  try {
    const { rows } = await client.query("SELECT * FROM diaries");
    return rows;
  } finally {
    client.release();
  }
}

async function getDiaryWithRange(from, to) {
  const client = await pool.connect();
  try {
    const { rows } = await client.query(
      "SELECT * FROM diaries WHERE date >= $1 and date <= $2",
      [from, to]
    );
    return rows;
  } finally {
    client.release();
  }
}

// Insert record into database
async function insertData(date, content) {
  const client = await pool.connect();
  try {
    const { rows } = await client.query(
      "INSERT INTO diaries (date, content) VALUES ($1, $2) RETURNING *",
      [date, content]
    );
    return rows;
  } finally {
    client.release();
  }
}

// Modify record
async function modifyData(id, newContent) {
  const client = await pool.connect();
  try {
    const { rows } = await client.query(
      "UPDATE diaries SET content = $1 WHERE id = $2 RETURNING *",
      [newContent, id]
    );
    return rows;
  } finally {
    client.release();
  }
}

// Delete record
async function deleteData(id) {
  const client = await pool.connect();
  try {
    const { rows } = await client.query(
      "DELETE FROM diaries WHERE id = $1 RETURNING *",
      [id]
    );
    return rows;
  } finally {
    client.release();
  }
}

module.exports = {
  getData,
  insertData,
  modifyData,
  deleteData,
  getDiaryWithRange,
};
