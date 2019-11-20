
import MTMDataStore from "./db/MTMDataStore";
import ModelQueryStatement, { IQueryStatement } from "./db/ModelQueryStatement";

export interface IVariableItem {
    id?: string | number;
    name: string;
    type: VariableType;
    body?: string;
    lastEdited: Date;
}

export enum VariableType {
    FUNCTION = 'function',
    CUSTOM = 'custom',
    DATA_LAYER = 'data_layer',
    COOKIE = 'cookie'
}

export interface IMTMVariableItem extends IVariableItem {
    get(id: string): Promise<IVariableItem>;
    create(variable: IVariableItem): Promise<IVariableItem>;
    delete(variable: IVariableItem): Promise<boolean>;
    update(variable: IVariableItem): Promise<IVariableItem>;
};

export class MTMVariableItem implements IMTMVariableItem {
    public id?: string;
    public name: string;
    public type: VariableType;
    public body: string;
    public lastEdited: Date = new Date();
    static query: ModelQueryStatement;
    static store: MTMDataStore;
    public async get(id: string| number): Promise<IVariableItem> {
        let value: any = await MTMVariableItem.store.Select(MTMVariableItem.query.SELECT, id)
        value = value[0] && value[0].DATA || "{}";
        return JSON.parse(value) as IVariableItem;
    }
    public async create(variable: IVariableItem) {
        const value: any = MTMVariableItem.store.Insert(MTMVariableItem.query.INSERT, JSON.stringify(variable));
        return await value;
    }
    public async delete(variable: IVariableItem) {
        const value: any = MTMVariableItem.store.Delete(MTMVariableItem.query.DELETE, variable.id);
        return await value;
    }
    public async update(variable: IVariableItem) {
        await MTMVariableItem.store.Update(MTMVariableItem.query.UPDATE, JSON.stringify(variable), variable.id);
        return await this.get(variable.id);
    }
    static async getAll(): Promise<Array<IVariableItem>> {
        const value: any = await MTMVariableItem.store.SelectAll(this.query.SELECT_ALL) || [[]];
        return value[0].map((ele: any): IVariableItem => {
            return {
                ...JSON.parse(ele.DATA),
                id: ele.ID
            } as IVariableItem
        })
    }

    constructor() {
        MTMVariableItem.query = new ModelQueryStatement('VARIABLES', {
            SELECT: "SELECT * FROM {TABLE} WHERE ID=?",
            SELECT_ALL: "SELECT * FROM {TABLE}",
            INSERT: `INSERT INTO {TABLE} ("DATA") VALUES (?)`,
            DELETE: `DELETE FROM {TABLE} WHERE ID=?`,
            UPDATE: `UPDATE {TABLE} SET "DATA" = ? WHERE ID=?`
        } as IQueryStatement);
        MTMVariableItem.store = MTMDataStore.getInstance();
    }
}

export default MTMVariableItem;
