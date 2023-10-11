import { DBMS } from "./modules/noSqlMS.js";
import { c } from "./modules/axuality.js";
const db = new DBMS("users");
c(db.getUser("lol"));
