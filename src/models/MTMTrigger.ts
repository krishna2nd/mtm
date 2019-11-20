
import MTMDataStore from "./db/MTMDataStore";
import ModelQueryStatement, { IQueryStatement } from "./db/ModelQueryStatement";

export interface ITriggerItem {
    id?: string | number;
    name: string;
    type: TriggerType;
    selector?: string;
    body?: string;
    lastEdited: Date;
}

export enum TriggerType {
    CLICK = 'click',
    SELECTED_CLICK = 'selected_click',
    PAGE_LOAD = 'page_load'
}

export interface IMTMTriggerItem extends ITriggerItem {
    get(id: string): Promise<ITriggerItem>;
    create(tag: ITriggerItem): Promise<ITriggerItem>;
    delete(tag: ITriggerItem): Promise<boolean>;
    update(tag: ITriggerItem): Promise<ITriggerItem>;
};

export class MTMTriggerItem implements IMTMTriggerItem {
    public id?: string;
    public name: string;
    public type: TriggerType;
    public triggers: string[];
    public body: string;
    public lastEdited: Date;
    static query: ModelQueryStatement;
    static store: MTMDataStore;
    public async get(id: string): Promise<ITriggerItem> {
        const value: any = await MTMTriggerItem.store.Select(MTMTriggerItem.query.SELECT, id)
        return JSON.parse(value.data) as ITriggerItem;
    }
    public async create(tag: ITriggerItem) {
        const value: any = MTMTriggerItem.store.Insert(MTMTriggerItem.query.INSERT, JSON.stringify(tag));
        return await value;
    }
    public async delete(tag: ITriggerItem) {
        const value: any = MTMTriggerItem.store.Delete(MTMTriggerItem.query.DELETE, tag.id);
        return await value;
    }
    public async update(tag: ITriggerItem) {
        const value: any = MTMTriggerItem.store.Update(MTMTriggerItem.query.UPDATE, JSON.stringify(tag), tag.id);
        return await value;
    }
    static async getAll(): Promise<Array<ITriggerItem>> {
        const value: any = await MTMTriggerItem.store.SelectAll(this.query.SELECT_ALL) || [[]];
        return value[0].map((ele: any): ITriggerItem => {
            return {
                ...JSON.parse(ele.DATA),
                id: ele.ID
            } as ITriggerItem
        })
    }

    constructor() {
        MTMTriggerItem.query = new ModelQueryStatement('TRIGGERS', {
            SELECT: "SELECT * FROM {TABLE} WHERE ID=?",
            SELECT_ALL: "SELECT * FROM {TABLE}",
            INSERT: `INSERT INTO {TABLE} ("DATA") VALUES (?)`,
            DELETE: `DELETE FROM {TABLE} WHERE ID=?`,
            UPDATE: `UPDATE {TABLE} SET "DATA" = ? WHERE ID=?`
        } as IQueryStatement);
        MTMTriggerItem.store = MTMDataStore.getInstance();
    }
}

export default MTMTriggerItem;
