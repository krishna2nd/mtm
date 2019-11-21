import MTMDataStore from "./db/MTMDataStore";
import ModelQueryStatement from "./db/ModelQueryStatement";
export interface ITagItem {
    name: string;
    type: string;
    triggers: string[];
    body: string;
    lastEdited: Date;
    get(id: string): ITagItem;
    create(tag: ITagItem): ITagItem;
    delete(tag: ITagItem): boolean;
    update(tag: ITagItem): ITagItem;
}
export declare class MTMTagItem implements ITagItem {
    name: string;
    type: string;
    triggers: string[];
    body: string;
    lastEdited: Date;
    static query: ModelQueryStatement;
    static store: MTMDataStore;
    get(id: string): ITagItem;
    create(tag: ITagItem): ITagItem;
    delete(tag: ITagItem): boolean;
    update(tag: ITagItem): ITagItem;
    static getAll(): Array<ITagItem>;
    constructor();
}
export default MTMTagItem;
//# sourceMappingURL=MTMTag copy.d.ts.map