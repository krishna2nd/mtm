import * as sqlite3 from "sqlite3";
declare class MTMDataStoreConfig {
    db: sqlite3.Database;
    constructor();
    setup(): void;
    open(): void;
    close(): void;
}
export declare const ParameterizedQuery: (query: string, cb?: Function) => any;
export declare type QueryStatement = sqlite3.Statement;
export default class MTMDataStore {
    store: MTMDataStoreConfig;
    private static instance;
    private constructor();
    static getInstance(): MTMDataStore;
    Select(selectQuery: string | QueryStatement, ...params: any[]): Promise<unknown>;
    SelectAll(selectQuery: string | QueryStatement, ...params: any[]): Promise<unknown>;
    Insert(insertQuery: string | QueryStatement, table: string, ...params: any[]): Promise<unknown>;
    Update(updateQuery: string | QueryStatement, ...params: any[]): Promise<unknown>;
    Delete(deleteQuery: string | QueryStatement, ...params: any[]): Promise<unknown>;
    Execute(action: string, query: string | QueryStatement, ...params: any[]): Promise<unknown>;
    Open(): void;
    Close(): void;
}
export {};
//# sourceMappingURL=MTMDataStore.d.ts.map