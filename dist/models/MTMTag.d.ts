import MTMDataStore from "./db/MTMDataStore";
import ModelQueryStatement from "./db/ModelQueryStatement";
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
}
export declare class MTMTagItem implements IMTMTagItem {
    id?: string | number;
    name: string;
    type: string;
    triggers: string[];
    body: string;
    lastEdited: Date;
    static query: ModelQueryStatement;
    static store: MTMDataStore;
    private table;
    get(id: string | number): Promise<ITagItem>;
    create(tag: ITagItem): Promise<any>;
    delete(tag: ITagItem): Promise<any>;
    update(tag: ITagItem): Promise<ITagItem>;
    static getAll(): Promise<Array<ITagItem>>;
    constructor();
}
export default MTMTagItem;
//# sourceMappingURL=MTMTag.d.ts.map