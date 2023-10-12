import { c, warning } from "./axuality.js";
import { readFileSync } from "./patchOfFuncs.js";

type usersT = { [key: string]: object };

export class DBMS {
  private users: usersT = {};

  constructor(usersJsonPath: string) {
    this.users = JSON.parse(
      readFileSync(`./db/${usersJsonPath}.json`).toString()
    );

    // this.users = JSON.parse("./db/" + usersJsonPath + ".json");
  }

  public getUser(id: string) {
    console.table(this.users);
    return this.users[id];
  }

  private generateIdForUser() {
    return "";
  }

  public newUser(settingsObj: settingsObjT) {
    if (settingsObj.id == undefined) settingsObj.id = this.generateIdForUser();

    return settingsObj;
  }
}

type settingsObjT = { id?: string; age: number; username: string };
