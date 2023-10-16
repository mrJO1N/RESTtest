import { createServer } from "http";
import { c, error } from "./modules/axuality.js";
import { api } from "./modules/RESTapi.js";
createServer(async (req, res) => {
    if (req.url?.match("/@api/user")) {
        const responce = await api.getJson(req, res);
        console.log(responce);
        c(req.method);
        api.sendJson(req, res, { jjs: "sdfghjk" });
        return;
    }
    error("404:", req.url);
    res.end();
}).listen(3000, () => console.log(`server is running by http://localhost:3000/`));
