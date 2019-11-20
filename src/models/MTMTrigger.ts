
import MTMDataStore from "./db/MTMDataStore";
import ModelQueryStatement, { IQueryStatement } from "./db/ModelQueryStatement";

export interface ITriggerItem
 {
    name: string;
    type: TriggerType;
    selector?: string;
    body?: string;
    lastEdited: Date;
}

export interface IMTMTriggerItem extends ITriggerItem {
    get(id: string): Promise<ITriggerItem>;
    create(tag: ITriggerItem): Promise<ITriggerItem>;
    delete(tag: ITriggerItem): Promise<boolean>;
    update(tag: ITriggerItem): Promise<ITriggerItem>;
};

export enum TriggerType {
    CLICK ='click',
    SELECTED_CLICK = 'selected_click',
    PAGE_LOAD = 'page_load'
}

export class MTMTriggerItem implements IMTMTriggerItem {
    public name: string;
    public type: TriggerType;
    public selector?: string;
    public body?: string;
    public lastEdited: Date;
    static query: ModelQueryStatement;
    static store: MTMDataStore;
    public async get(id:string): Promise<ITriggerItem> { 
        const value: any = await MTMTriggerItem.store.Select(MTMTriggerItem.query.SELECT, id)
        return JSON.parse(value.data) as ITriggerItem; 
    }
    public async create(trigger: ITriggerItem) { 
        const value: any = MTMTriggerItem.store.Insert(MTMTriggerItem.query.INSERT, JSON.stringify(trigger));
        return await value;
     }
    public async delete(tag: ITriggerItem) { return true; }
    public async update(tag: ITriggerItem) { return tag; }
    static async getAll(): Promise<Array<ITriggerItem>> {
        const value: any = await MTMTriggerItem.store.SelectAll(this.query.SELECT_ALL)
        return JSON.parse(value.data) as Array<ITriggerItem>
    }

    constructor() {
        MTMTriggerItem.query = new ModelQueryStatement({
            SELECT: "SELECT * FROM TRIGGERS WHERE ID=?",
            SELECT_ALL: "SELECT * FROM TRIGGERS",
            INSERT: `INSERT INTO TRIGGERS ("DATA") VALUES (?)`,
            DELETE: `DELETE FROM TRIGGERS WHERE ID=?`,
            UPDATE: `UPDATE "DATA` 
        } as IQueryStatement);
        MTMTriggerItem.store = MTMDataStore.getInstance();
    }
}

export default MTMTriggerItem;
