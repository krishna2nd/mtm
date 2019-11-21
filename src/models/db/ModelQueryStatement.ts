import { QueryStatement } from "./MTMDataStore";

export interface IQueryStatement {
    INSERT: QueryStatement;
    UPDATE: QueryStatement;
    SELECT: QueryStatement;
    SELECT_ALL: QueryStatement;
    DELETE: QueryStatement;
}

export default class  ModelQueryStatement implements IQueryStatement {
    INSERT: QueryStatement;
    UPDATE: QueryStatement;
    SELECT: QueryStatement;
    SELECT_ALL: QueryStatement;
    DELETE: QueryStatement;
    constructor (table: string, query: IQueryStatement) {
        const tablePlaceholder = '{TABLE}';
        this.INSERT = (query.INSERT.replace(tablePlaceholder, table));
        this.UPDATE = (query.UPDATE.replace(tablePlaceholder, table));
        this.SELECT = (query.SELECT.replace(tablePlaceholder, table));
        this.SELECT_ALL = (query.SELECT_ALL.replace(tablePlaceholder, table));
        this.DELETE = (query.DELETE.replace(tablePlaceholder, table));
    }

}