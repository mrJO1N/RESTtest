import { defaultPathDir_T, extToCT_T, spAliaces_I } from "./modulesTypes.js";

import { readFileSync } from "fs";
import { extname } from "path";
import chalk from "chalk";
const { red, blue, yellow } = chalk;

/**@param {any} text blue console.log for development*/
export const c = (...text: any) => console.log(blue(...text)),
  /**@param {any} text red console.error for development*/
  error = (...text: any) => console.error(red(...text)),
  /**@param {any} text yellow console.log for development */
  warning = (...text: any) => console.log(yellow(...text));

export const extToCT: extToCT_T = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".ico": "image/x-icon",
};

export class PathDir {
  private specialAliaces: spAliaces_I;
  private pagesPath = "/pages";
  private pagePath = "/home";
  private filePath = "/index.html";
  private generalFrontDirPath;

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

  private setAsDefault({ pagePath, filePath }: Partial<defaultPathDir_T>) {
    this.pagePath = pagePath ?? "/home";
    this.filePath = filePath ?? "/index.html";
  }

  /**
   * this func return path of request file in file system with more request
   *
   * @param {string} url request.url
   * @returns {string} path of file
   *
   */

  public getFilePath(url: string | undefined) {
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

      case undefined:
        error("getFile: url is undefined");
        break;

      default:
        if (extname(url) == "") {
          this.setAsDefault({ pagePath: url });
        } else {
          this.filePath = url ?? this.filePath;
        }
    }

    warning(`getf: ${url} | ${this.pagePath} | ${this.filePath}\n`);
    return `./${this.pagesPath}${this.pagePath}${this.filePath}`;
  }
}
