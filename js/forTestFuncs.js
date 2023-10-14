import { createServer } from "http";
import { error } from "./modules/axuality.js";
import { api } from "./modules/RESTapi.js";
createServer(async (req, res) => {
    if (req.url === "/@api/user") {
        const responce = await api.client.getJson(req, res);
        console.log(responce);
        req.method;
        api.client.sendJson(req, res, { jjs: "sdfghjk" });
        return;
    }
    error("404");
    res.end();
}).listen(3000, () => console.log(`server is running by http://localhost:3000/`));
