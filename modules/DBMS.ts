import { readFile } from "./patchOfFuncs.js";
import { error } from "./axuality.js";

export class DBMS {
  private users = {};

  constructor(usersJsonPath: string) {
    readFile(usersJsonPath)
      .then((data) => (this.users = data))
      .catch((err) => error(err));
  }

  public getUser(id: string) {
    return users[id];
  }
}
