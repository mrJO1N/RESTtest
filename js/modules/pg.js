import * as pg from "pg";
const { Client } = pg;
export const db = new Client({
    host: "localhost",
    port: 5432,
    database: "test-node",
    user: "cool12356790",
    password: "cool12356790",
});
