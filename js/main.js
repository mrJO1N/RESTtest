import { c, error, extToCT, PathDir } from "./modules/axuality.js";
import { readFile } from "./modules/patchOfFuncs.js";
import { createServer } from "http";
import { extname } from "path";
const pathDir = new PathDir("general-front", "axuality/special-aliases.json", "pages");
const HOSTNAME = process.env.HOSTNAME ?? "localhost", PORT = process.env.PORT ?? "3000";
c("========================================");
createServer((req, res) => {
    if (req.url?.slice(2, 5) === "api") {
        c("");
        res.end();
        return;
    }
    else {
    }
    const filePath = pathDir.getFilePath(req.url);
    readFile(filePath)
        .then((data) => {
        res.writeHead(200, { "Content-Type": extToCT[extname(filePath)] });
        res.end(data);
    })
        .catch((err) => {
        error(err);
        res.statusCode = 404;
        res.end();
    });
}).listen(PORT, () => console.log(`server is running by http://${HOSTNAME}:${PORT}/`));
