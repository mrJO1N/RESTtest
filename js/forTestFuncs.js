import { db } from "./modules/pg.js";
db.connect();
const responce = await db.query("SELECT * FROM public.tablee LIMIT 100");
console.table(responce.rows);
