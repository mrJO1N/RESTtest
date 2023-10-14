import { error } from "./axuality.js";
import { db } from "./pg.js";
db.connect().catch((err) => error("db.connect: " + err));
