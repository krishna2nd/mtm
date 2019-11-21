import MTMDataStore from "./db/MTMDataStore";
import ModelQueryStatement from "./db/ModelQueryStatement";
import MTMTagItem from './MTMTag';
export interface ITriggerItem {
    id?: string | number;
    name: string;
    type: TriggerType;
    selector?: string;
    body?: string;
    lastEdited: Date;
}
export declare enum TriggerType {
    CLICK = "click",
    SELECTED_CLICK = "selected_click",
    PAGE_LOAD = "page_load",
    CUSTOM_EVENT = "custom_event"
}
export interface IMTMTriggerItem extends ITriggerItem {
    get(id: string): Promise<ITriggerItem>;
    create(trigger: ITriggerItem): Promise<ITriggerItem>;
    delete(trigger: ITriggerItem): Promise<boolean>;
    update(trigger: ITriggerItem): Promise<ITriggerItem>;
}
export declare class MTMTriggerItem implements IMTMTriggerItem {
    id?: string;
    name: string;
    type: TriggerType;
    selector?: string;
    tags?: MTMTagItem[];
    body: string;
    lastEdited: Date;
    static query: ModelQueryStatement;
    static store: MTMDataStore;
    private table;
    get(id: string | number): Promise<ITriggerItem>;
    create(trigger: ITriggerItem): Promise<any>;
    delete(trigger: ITriggerItem): Promise<any>;
    update(trigger: ITriggerItem): Promise<ITriggerItem>;
    static getAll(): Promise<Array<ITriggerItem>>;
    constructor();
}
export default MTMTriggerItem;
//# sourceMappingURL=MTMTrigger.d.ts.map