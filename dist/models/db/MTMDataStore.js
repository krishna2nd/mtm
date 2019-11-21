"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const sqlite3 = require("sqlite3");
const sqlite = sqlite3.verbose();
const dbName = "mtm.sqlite3";
class MTMDataStoreConfig {
    constructor() {
        //  this.open();
        //  this.setup();
        //  this.close();
    }
    setup() {
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
    open() {
        console.log("open db");
        this.db = new sqlite.Database(dbName, console.log);
    }
    close() {
        console.log("close db");
        this.db.close(console.log);
    }
}
const store = new MTMDataStoreConfig();
console.log("store", store);
exports.ParameterizedQuery = (query, cb = () => { }) => store.db.prepare(query, cb);
class MTMDataStore {
    constructor() {
        this.store = store;
    }
    static getInstance() {
        if (!MTMDataStore.instance) {
            MTMDataStore.instance = new MTMDataStore();
        }
        return MTMDataStore.instance;
    }
    Select(selectQuery, ...params) {
        return this.Execute('get', selectQuery, ...params);
    }
    SelectAll(selectQuery, ...params) {
        return this.Execute('all', selectQuery, ...params);
    }
    Insert(insertQuery, table, ...params) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.Execute('run', insertQuery, ...params);
            // OR select seq from sqlite_sequence where name="table_name"
            return yield this.Execute('get', `select seq as ID from sqlite_sequence where name="${table}"`);
        });
    }
    Update(updateQuery, ...params) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.Execute('run', updateQuery, ...params);
        });
    }
    Delete(deleteQuery, ...params) {
        return this.Execute('run', deleteQuery, ...params);
    }
    Execute(action, query, ...params) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.Open();
                const statement = (typeof query === 'string') ? exports.ParameterizedQuery(query, (err) => {
                    if (err) {
                        console.log("ERR ParameterizedQuery", err);
                        return reject(err);
                        this.Close();
                    }
                }) : query;
                console.log(statement, params);
                statement[action](...params, (err, ...data) => {
                    console.log(err, data);
                    if (err)
                        return reject(err);
                    resolve(data);
                    statement.finalize();
                    this.Close();
                });
            });
        });
    }
    Open() {
        this.store.open();
    }
    Close() {
        this.store.close();
    }
}
exports.default = MTMDataStore;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTVRNRGF0YVN0b3JlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZGVscy9kYi9NVE1EYXRhU3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbUNBQW1DO0FBRW5DLE1BQU0sTUFBTSxHQUFvQixPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDbEQsTUFBTSxNQUFNLEdBQUcsYUFBYSxDQUFDO0FBRTdCLE1BQU0sa0JBQWtCO0lBRXBCO1FBQ0ksZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixpQkFBaUI7SUFDckIsQ0FBQztJQUNNLEtBQUs7UUFDUixJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQzs7O1dBR1QsQ0FBQyxDQUFDO1FBQ0wsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7OztZQUdSLENBQUMsQ0FBQztRQUNOLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDOzs7WUFHUixDQUFDLENBQUM7SUFDVixDQUFDO0lBQ00sSUFBSTtRQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDdEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBQ00sS0FBSztRQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDdkIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLENBQUM7Q0FDSjtBQUVELE1BQU0sS0FBSyxHQUFHLElBQUksa0JBQWtCLEVBQUUsQ0FBQztBQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQTtBQUNkLFFBQUEsa0JBQWtCLEdBQUcsQ0FBQyxLQUFhLEVBQUUsS0FBZSxHQUFHLEVBQUUsR0FBRyxDQUFD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