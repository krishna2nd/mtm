import MTMDataStore from "./db/MTMDataStore";
import ModelQueryStatement, { IQueryStatement } from "./db/ModelQueryStatement";


export interface ITagItem {
    id?: string | number;
    name: string;
    type: string;
    triggers: string[];
    body: string;
    lastEdited: Date;
}

export interface IMTMTagItem extends ITagItem {
    get(id: string): Promise<ITagItem>;
    create(tag: ITagItem): Promise<ITagItem>;
    delete(tag: ITagItem): Promise<boolean>;
    update(tag: ITagItem): Promise<ITagItem>;
};

export class MTMTagItem implements IMTMTagItem {
    public id?: string | number;
    public name: string;
    public type: string;
    public triggers: string[];
    public body: string;
    public lastEdited: Date;
    static query: ModelQueryStatement;
    static store: MTMDataStore;
    private table: string = 'TAGS';
    public async get(id: string | number): Promise<ITagItem> {
        let value: any = await MTMTagItem.store.Select(MTMTagItem.query.SELECT, id)
        value = value[0] && value[0].DATA || "{}";
        return JSON.parse(value) as ITagItem;
    }
    public async create(tag: ITagItem) { 
        const value: any = MTMTagItem.store.Insert(MTMTagItem.query.INSERT, this.table, JSON.stringify(tag));
        return await value;
     }
    public async delete(tag: ITagItem) { 
        const value: any = MTMTagItem.store.Delete(MTMTagItem.query.DELETE, tag.id);
        return await value;
    }
    public async update(tag: ITagItem) {
        await MTMTagItem.store.Update(MTMTagItem.query.UPDATE, JSON.stringify(tag), tag.id);
        return await this.get(tag.id); 
    }
    static async getAll(): Promise<Array<ITagItem>> {
        const value: any = await MTMTagItem.store.SelectAll(this.query.SELECT_ALL) || [[]];
        return value[0].map((ele: any): ITagItem => {
            return {
                ...JSON.parse(ele.DATA),
                id: ele.ID
             } as ITagItem
        })
    }

    constructor() {
        MTMTagItem.query = new ModelQueryStatement(this.table, {
            SELECT: "SELECT * FROM {TABLE} WHERE ID=?",
            SELECT_ALL: "SELECT * FROM {TABLE}",
            INSERT: `INSERT INTO {TABLE} ("DATA") VALUES (?)`,
            DELETE: `DELETE FROM {TABLE} WHERE ID=?`,
            UPDATE: `UPDATE {TABLE} SET "DATA" = ? WHERE ID=?` 
        } as IQueryStatement);
        MTMTagItem.store = MTMDataStore.getInstance();
    }
}



export default MTMTagItem;
