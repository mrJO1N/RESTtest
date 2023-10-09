import { readFile } from "./patchOfFuncs.js";
import { error } from "./axuality.js";

type usersT = { [key: string]: object };

export class DBMS {
  private users: usersT = {};

  constructor(usersJsonPath: string) {
    readFile(usersJsonPath)
      .then((data) => (this.users = JSON.parse(data, "utf-8")))
      .catch((err) => error(err));
  }

  public getUser(id: string) {
    return this.users[id];
  }
}
