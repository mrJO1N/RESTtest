import { c, error, extToCT, PathDir } from "./modules/axuality.js";
import { readFile } from "./modules/patchOfFuncs.js";
// import { api } from "./modules/RESTAPI.js";
import { createServer } from "http";
import { extname } from "path";

const pathDir = new PathDir(
  "general-front",
  "axuality/special-aliases.json",
  "pages"
);

const HOSTNAME = process.env.HOSTNAME ?? "localhost",
  PORT = process.env.PORT ?? "3000";

c("========================================");

createServer((req, res) => {
  if (req.url?.slice(2, 5) === "api") {
    c("api");
    res.end();
    return;
  }
  const filePath = pathDir.getFilePath(req.url);

  readFile(filePath)
    .then((data) => {
      c(req.url);
      res.writeHead(200, { "Content-Type": extToCT[extname(filePath)] });
      res.end(data);
    })
    .catch((err) => {
      error(err);
      error(err);
      res.statusCode = 404;
      res.end();
    });
  // res.end("error");
}).listen(PORT, () =>
  console.log(`server is running by http://${HOSTNAME}:${PORT}/`)
);
