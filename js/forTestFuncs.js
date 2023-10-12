import { c } from "./modules/axuality.js";
import { db } from "./modules/pg.js";
db.connect();
db.query("SELECT NOW()").then((data) => c(data));
db.end();
