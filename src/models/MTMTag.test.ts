import MTMTagItem, { ITagItem } from "./MTMTag";

(async () => {
    const tag = new MTMTagItem();
    try {
    await tag.create({
        name: "test",
        triggers: ['1','3'],
        body: 'alert("test)',
        lastEdited: new Date(),
        type: "click"
    } as ITagItem)
    } catch(err) {
        console.log(err);
    }
    try {
    console.log(await MTMTagItem.getAll())
    } catch(err) {
        console.log(err);
    }
    console.log("Done")
})()
