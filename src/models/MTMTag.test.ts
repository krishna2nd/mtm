import MTMTagItem, { ITagItem } from "./MTMTag";

(async () => {
    const tag = new MTMTagItem();
    await tag.create({
        name: "test",
        triggers: ['1','3'],
        body: 'alert("test)',
        lastEdited: new Date(),
        type: "click"
    } as ITagItem)
    console.log(await MTMTagItem.getAll())
    console.log("Done")
})()
