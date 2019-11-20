import MTMVariable, { IVariableItem, VariableType } from "./MTMVariable";

(async () => {
    const mtmVar = new MTMVariable();
    try {
        const tag: IVariableItem = {
            name: "test",
            body: '"some value"',
            lastEdited: new Date(),
            type: VariableType.CUSTOM
        };
        const rt = await mtmVar.create(tag as IVariableItem)
        console.log(rt);
        tag.id = rt[0].ID;
        tag.name = "test " + new Date();
        await mtmVar.update(tag as IVariableItem)
        
    } catch (err) {
        console.log(err);
    }
    try {
        const result = await MTMVariable.getAll();
        result.forEach(async tag => {
            console.log("Deleting ", tag)
            await mtmVar.delete(tag as IVariableItem);
        })
    } catch (err) {
        console.log(err);
    }
    console.log("Done")
})()
