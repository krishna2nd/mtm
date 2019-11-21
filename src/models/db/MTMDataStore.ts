import * as sqlite3 from "sqlite3";

const sqlite: sqlite3.sqlite3 = sqlite3.verbose();
const dbName = "mtm.sqlite3";

class MTMDataStoreConfig {
    public db: sqlite3.Database;
    constructor() {
        //  this.open();
        //  this.setup();
        //  this.close();
    }
    public setup() {
        this.db.run(`CREATE TABLE IF NOT EXISTS "TAGS" (
            "ID"	INTEGER PRIMARY KEY AUTOINCREMENT,
            "DATA"	TEXT NOT NULL
        );`);
        this.db.run(`CREATE TABLE IF NOT EXISTS "TRIGGERS" (
           "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
            "DATA" TEXT NOT NULL
         );`);
        this.db.run(`CREATE TABLE  IF NOT EXISTS "VARIABLES" (
            "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
            "DATA" TEXT NOT NULL
         );`);
    }
    public open() {
        console.log("open db")
        this.db = new sqlite.Database(dbName, console.log);
    }
    public close() {
        console.log("close db")
        this.db.close(console.log);
    }
}

const store = new MTMDataStoreConfig();
console.log("store", store)
export const ParameterizedQuery = (query: string, cb: Function = () => { }): sqlite3.Statement => store.db.prepare(query, cb);

export type QueryStatement = sqlite3.Statement;

export default class MTMDataStore {
    store: MTMDataStoreConfig;
    private static instance: MTMDataStore;
    private constructor() {
        this.store = store;
    }
    public static getInstance() {
        if (!MTMDataStore.instance) {
            MTMDataStore.instance = new MTMDataStore()
        }
        return MTMDataStore.instance;
    }
    public Select(selectQuery: string | QueryStatement, ...params: any[]) {
        return this.Execute('get', selectQuery, ...params);
    }

    public SelectAll(selectQuery: string | QueryStatement, ...params: any[]) {
        return this.Execute('all', selectQuery, ...params);
    }
    public async Insert(insertQuery: string | QueryStatement, table: string, ...params: any[]) {
        await this.Execute('run', insertQuery, ...params);
        // OR select seq from sqlite_sequence where name="table_name"
        return await this.Execute('get', `select seq as ID from sqlite_sequence where name="${table}"`);
    }
    public async Update(updateQuery: string | QueryStatement, ...params: any[]) {
        return await this.Execute('run', updateQuery, ...params);
    }
    public Delete(deleteQuery: string | QueryStatement, ...params: any[]) {
        return this.Execute('run', deleteQuery, ...params);
    }

    public async Execute(action: string, query: string | QueryStatement, ...params: any[]) {
        return new Promise((resolve, reject) => {
            this.Open();
            const statement: QueryStatement = (typeof query === 'string') ? ParameterizedQuery(query, (err) => {
                if (err) {
                    console.log("ERR ParameterizedQuery", err);
                    return reject(err);
                    this.Close();
                }
            }) : query;
            console.log(statement, params)
            statement[action](...params, (err, ...data) => {
                console.log(err, data)
                if (err) return reject(err)
                resolve(data);
                statement.finalize();
                this.Close();
            });
        });
    }
    public Open() {
        this.store.open()
    }
    public Close() {
        this.store.close();
    }
}