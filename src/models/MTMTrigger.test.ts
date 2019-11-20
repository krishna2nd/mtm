import MTMTrigger, { ITriggerItem, TriggerType } from "./MTMTrigger";

(async () => {
    const MTMtag = new MTMTrigger();
    try {
        const tag: ITriggerItem = {
            name: "test",
            body: 'alert("test)',
            lastEdited: new Date(),
            type: TriggerType.PAGE_LOAD
        };
        const rt = await MTMtag.create(tag as ITriggerItem)
        console.log(rt);
        tag.id = rt[0].ID;
        tag.name = "test " + new Date();
        await MTMtag.update(tag as ITriggerItem)
        
    } catch (err) {
        console.log(err);
    }
    try {
        const result = await MTMTrigger.getAll();
        result.forEach(async tag => {
            console.log("Deleting ", tag)
            await MTMtag.delete(tag as ITriggerItem);
        })
    } catch (err) {
        console.log(err);
    }
    console.log("Done")
})()
