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
    get(id: string): ITagItem;
    create(tag: ITagItem): ITagItem;
    delete(tag: ITagItem): boolean;
    update(tag: ITagItem): ITagItem;
    static getAll(): ITagItem[];
}
export default MTMTagItem;
//# sourceMappingURL=MTMTagItem.d.ts.map