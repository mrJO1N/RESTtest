import pkg from "pg";
const { Client } = pkg;
export const db = new Client({
    host: "localhost",
    port: 5432,
    database: "node_test",
    user: "postgres",
    password: "cool12356790",
});
