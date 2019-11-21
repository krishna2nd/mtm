interface Tag {
    get(): Array<Tag>;
    create(tag: Tag): Tag;
    delete(Tag: any): boolean;
    update(Tag: any): Tag;
}
declare class MTMTag implements Tag {
    get(): Tag[];
    create(tag: Tag): Tag;
    delete(tag: Tag): boolean;
    update(tag: Tag): Tag;
}
export default MTMTag;
//# sourceMappingURL=Tags.d.ts.map