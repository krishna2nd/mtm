import { ParameterizedQuery, QueryStatement } from "./MTMDataStore";

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
        this.INSERT = ParameterizedQuery(query.INSERT.replace(tablePlaceholder, table));
        this.UPDATE = ParameterizedQuery(query.UPDATE.replace(tablePlaceholder, table));
        this.SELECT = ParameterizedQuery(query.SELECT.replace(tablePlaceholder, table));
        this.SELECT_ALL = ParameterizedQuery(query.SELECT_ALL.replace(tablePlaceholder, table));
        this.DELETE = ParameterizedQuery(query.DELETE.replace(tablePlaceholder, table));
    }

}