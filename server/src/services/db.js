import pkg from "pg";
const { Pool } = pkg;

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "users",
  password: "Akinkunmi100$",
  port: 5432,
});
