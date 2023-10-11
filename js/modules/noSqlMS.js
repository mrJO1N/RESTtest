import { readFileSync } from "./patchOfFuncs.js";
export class DBMS {
    users = {};
    private;
    constructor(usersJsonPath) {
        this.users = JSON.parse(readFileSync(`./db/${usersJsonPath}.json`).toString());
    }
    getUser(id) {
        console.table(this.users);
        return this.users[id];
    }
    generateIdForUser() {
        return;
    }
    newUser(settingsObj) {
        if (settingsObj.id == undefined)
            settingsObj.id = this.generateIdForUser();
        return settingsObj;
    }
}
