
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
    create(trigger: ITriggerItem): Promise<ITriggerItem>;
    delete(trigger: ITriggerItem): Promise<boolean>;
    update(trigger: ITriggerItem): Promise<ITriggerItem>;
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
    public async get(id: string| number): Promise<ITriggerItem> {
        let value: any = await MTMTriggerItem.store.Select(MTMTriggerItem.query.SELECT, id)
        value = value[0] && value[0].DATA || "{}";
        return JSON.parse(value) as ITriggerItem;
    }
    public async create(trigger: ITriggerItem) {
        const value: any = MTMTriggerItem.store.Insert(MTMTriggerItem.query.INSERT, JSON.stringify(trigger));
        return await value;
    }
    public async delete(trigger: ITriggerItem) {
        const value: any = MTMTriggerItem.store.Delete(MTMTriggerItem.query.DELETE, trigger.id);
        return await value;
    }
    public async update(trigger: ITriggerItem) {
        await MTMTriggerItem.store.Update(MTMTriggerItem.query.UPDATE, JSON.stringify(trigger), trigger.id);
        return await this.get(trigger.id);
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
