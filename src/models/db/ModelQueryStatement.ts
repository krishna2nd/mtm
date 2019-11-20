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
        this.UPDATE = ParameterizedQuery(query.INSERT);
        this.SELECT = ParameterizedQuery(query.INSERT);
        this.SELECT_ALL = ParameterizedQuery(query.INSERT);
        this.DELETE = ParameterizedQuery(query.INSERT);
    }

}