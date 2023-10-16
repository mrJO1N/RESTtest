import { readFileSync } from "fs";
import chalk from "chalk";
const { red, blue, yellow } = chalk;
export const c = (...text) => console.log(blue(...text)), error = (...text) => console.error(red(...text)), warning = (...text) => console.log(yellow(...text));
export const extToCT = {
    ".html": "text/html",
    ".js": "text/javascript",
    ".css": "text/css",
    ".ico": "image/x-icon",
};
export class PathDir {
    specialAliaces;
    pagesPath = "/pages";
    pagePath = "/home";
    filePath = "/index.html";
    generalFrontDirPath;
    constructor(generalFrontDirPath, spAliacesFilePath, pathOfPagesDir) {
        this.pagesPath = pathOfPagesDir;
        this.generalFrontDirPath = generalFrontDirPath;
        this.specialAliaces = JSON.parse(readFileSync("./" + spAliacesFilePath, "utf-8"));
    }
    setAsDefault({ pagePath, filePath }) {
        this.pagePath = pagePath ?? "/home";
        this.filePath = filePath ?? "/index.html";
    }
    getFilePath(url) {
        switch (url) {
            case "/favicon.ico":
                return ("./" + this.generalFrontDirPath + this.specialAliaces["/favicon.ico"]);
            case "/":
                this.setAsDefault({ pagePath: "/home" });
                break;
            case "/;":
                this.setAsDefault({ pagePath: "/admin" });
                break;
            case undefined:
                error("getFile: url is undefined");
                break;
            default:
                if (!url?.match(".")) {
                    this.setAsDefault({ pagePath: url });
                }
                else {
                    this.filePath = url ?? this.filePath;
                }
        }
        warning(`getf: ${url} | ${this.pagePath} | ${this.filePath}\n`);
        return `./${this.pagesPath}${this.pagePath}${this.filePath}`;
    }
}
