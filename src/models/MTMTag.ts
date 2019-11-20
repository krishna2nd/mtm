import MTMDataStore from "./db/MTMDataStore";
import ModelQueryStatement, { IQueryStatement } from "./db/ModelQueryStatement";


export interface ITagItem {
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
    public name: string;
    public type: string;
    public triggers: string[];
    public body: string;
    public lastEdited: Date;
    static query: ModelQueryStatement;
    static store: MTMDataStore;
    public async get(id: string): Promise<ITagItem> {
        const value: any = await MTMTagItem.store.Select(MTMTagItem.query.SELECT, id)
        return JSON.parse(value.data) as ITagItem;
    }
    public async create(tag: ITagItem) { 
        const value: any = MTMTagItem.store.Insert(MTMTagItem.query.INSERT, JSON.stringify(tag));
        return await value;
     }
    public async delete(tag: ITagItem) { return true; }
    public async update(tag: ITagItem) { return tag; }
    static async getAll(): Promise<Array<ITagItem>> {
        const value: any = await MTMTagItem.store.SelectAll(this.query.SELECT_ALL) || [[]];
        return value[0].map((ele: any): ITagItem => {
            return JSON.parse(ele.DATA) as ITagItem
        })
    }

    constructor() {
        MTMTagItem.query = new ModelQueryStatement({
            SELECT: "SELECT * FROM TAGS WHERE ID=?",
            SELECT_ALL: "SELECT * FROM TAGS",
            INSERT: `INSERT INTO TAGS ("DATA") VALUES (?)`,
            DELETE: `DELETE FROM TAGS WHERE ID=?`,
            UPDATE: `UPDATE "DATA` 
        } as IQueryStatement);
        MTMTagItem.store = MTMDataStore.getInstance();
    }
}



export default MTMTagItem;
