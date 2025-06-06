import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: "postgres",
  password: "asdf",
  host: "localhost",
  database: "user",
  port: 5432,
});

export default pool;
