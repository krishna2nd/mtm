import { QueryStatement } from "./MTMDataStore";
export interface IQueryStatement {
    INSERT: QueryStatement;
    UPDATE: QueryStatement;
    SELECT: QueryStatement;
    SELECT_ALL: QueryStatement;
    DELETE: QueryStatement;
}
export default class ModelQueryStatement implements IQueryStatement {
    INSERT: QueryStatement;
    UPDATE: QueryStatement;
    SELECT: QueryStatement;
    SELECT_ALL: QueryStatement;
    DELETE: QueryStatement;
    constructor(table: string, query: IQueryStatement);
}
//# sourceMappingURL=ModelQueryStatement.d.ts.map