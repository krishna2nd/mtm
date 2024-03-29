import MTMTagItem, { ITagItem } from "./MTMTag";

(async () => {
    const MTMtag = new MTMTagItem();
    try {
        const tag: ITagItem = {
            name: "test",
            triggers: ['1', '3'],
            body: 'alert("test)',
            lastEdited: new Date(),
            type: "click"
        };
        const rt = await MTMtag.create(tag as ITagItem)
        console.log(rt);
        tag.id = rt[0].ID;
        tag.name = "test " + new Date();
        await MTMtag.update(tag as ITagItem)
        
    } catch (err) {
        console.log(err);
    }
    try {
        const result = await MTMTagItem.getAll();
        result.forEach(async tag => {
            console.log("Deleting ", tag)
            await MTMtag.delete(tag as ITagItem);
        })
    } catch (err) {
        console.log(err);
    }
    console.log("Done")
})()
