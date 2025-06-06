import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: "---",
  password: "---",
  host: "----",
  database: "----",
  port: 0000,
});

export default pool;
