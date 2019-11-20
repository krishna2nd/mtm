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
    constructor (query: IQueryStatement) {
        this.INSERT = ParameterizedQuery(query.INSERT);
        this.UPDATE = ParameterizedQuery(query.UPDATE);
        this.SELECT = ParameterizedQuery(query.SELECT);
        this.SELECT_ALL = ParameterizedQuery(query.SELECT_ALL);
        this.DELETE = ParameterizedQuery(query.DELETE);
    }

}