import pkg from "pg";
const { Client } = pkg;
export const db = new Client({
    host: process.env.PG_HOST,
    port: Number(process.env.PG_PORT),
    database: "node_test",
    user: process.env.PG_USER,
    password: process.env.PG_PASSWOR,
});
