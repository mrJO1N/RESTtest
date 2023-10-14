import { error } from "./axuality.js";
import { db } from "./pg.js";
import { api } from "./RESTapi.js";

db.connect().catch((err) => error("db.connect: " + err));

// api.client.getJson(req, res);
