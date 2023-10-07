import { extname } from "path";
import { readFileSync } from "fs";
import chalk from "chalk";
const { red, blue, yellow } = chalk;

/**@param {any} text blue console.log for development*/
export const c = (...text: any) => console.log(blue(...text)),
  /**@param {any} text red console.error for development*/
  error = (...text: any) => console.error(red(...text)),
  /**@param {any} text yellow console.log for development */
  warning = (...text: any) => console.log(yellow(...text));

export const extToCT: extToCTI = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "style/css",
  ".ico": "image/x-icon",
};

type extToCTI = {
  [key: string]: string;
};

interface spAliacesI {
  [key: string]: string;
}

type defaultPathDirI = {
  pagePath: string;
  filePath: string;
};

export class PathDir {
  private specialAliaces: spAliacesI = {};
  private pagesPath = "/pages";
  private pagePath = "/home";
  private filePath = "/index.html";
  private generalFrontDirPath = "";

  /**
   *
   * @param {string} generalFrontDirPath
   * @param {string} spAliacesFilePath path to json of special aliaces for files
   * @param {string} pathOfPagesDir
   */

  constructor(
    generalFrontDirPath: string,
    spAliacesFilePath: string,
    pathOfPagesDir: string
  ) {
    this.pagesPath = pathOfPagesDir;
    this.generalFrontDirPath = generalFrontDirPath;

    this.specialAliaces = JSON.parse(
      readFileSync("./" + spAliacesFilePath, "utf-8")
    );
  }

  private setAsDefault({ pagePath, filePath }: Partial<defaultPathDirI>) {
    this.pagePath = pagePath ?? "/home";
    this.filePath = filePath ?? "/index.html";
  }

  /**
   * this func return path of request file in file system with more request
   *
   * @param {string} url url from responce
   * @returns {string} path of file
   *
   */

  public getFilePath(url: string | undefined) {
    // if (url !== undefined && url[0] === "%") {
    //   return `./${this.generalFrontDirPath}/${this.specialAliaces[url]}`;
    // }

    switch (url) {
      case "/favicon.ico":
        return (
          "./" + this.generalFrontDirPath + this.specialAliaces["/favicon.ico"]
        );

      case "/":
        this.setAsDefault({ pagePath: "/home" });
        break;

      case "/;":
        this.setAsDefault({ pagePath: "/admin" });
        break;
      default:
        if (url !== "/") {
          if (extname(url ?? "/") === "") {
            this.setAsDefault({ pagePath: url });
          } else {
            this.filePath = url ?? this.filePath;
          }
        }
    }

    // warning(`getf: ${url} | ${this.pagePath} | ${this.filePath}`);
    return `./${this.pagesPath}${this.pagePath}${this.filePath}`;
  }
}
