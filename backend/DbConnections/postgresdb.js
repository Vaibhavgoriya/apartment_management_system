const { Pool } = require("pg"); // Correctly import the 'Pool' class from the 'pg' library

const connectionObj = () => {
  const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "apartment_management",
    password: "RS1510pj*&",
    port: 5432,
    max: 10,
  });
  return pool;
};

module.exports = {
  connectionObj,
};
