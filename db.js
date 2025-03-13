require("dotenv").config();
const pg = require("pg");
const Pool = pg.Pool;

const pool = new Pool({
  connectionString: "postgres://neondb_owner:npg_mt6h5lNTfWAb@ep-cool-block-a6j8asu2-pooler.us-west-2.aws.neon.tech/neondb?sslmode=require",
});

async function getData() {
  const client = await pool.connect();
  try {
    const { rows } = await client.query("SELECT * FROM diaries");
    return rows;
  } finally {
    client.release();
  }
}

module.exports = { getData };
