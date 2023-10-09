import * as pg from "pg";
const { Client } = pg;
export class DBMS {
    db;
    constructor() {
        this.db = new Client({
            user: "postgres",
            host: "localhost",
            database: "test",
            password: "1111",
            port: 5432,
        });
        this.db.connect();
    }
    query(query) {
        return new Promise((resolve, reject) => {
            this.db.query(query, (err, data) => {
                if (err)
                    return reject(err);
                resolve(data);
            });
        });
    }
    endConnect() {
        this.db.end();
    }
}
