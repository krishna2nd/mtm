"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const MTMTrigger_1 = require("./MTMTrigger");
(() => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const MTMtag = new MTMTrigger_1.default();
    try {
        const tag = {
            name: "test",
            body: 'alert("test)',
            lastEdited: new Date(),
            type: MTMTrigger_1.TriggerType.PAGE_LOAD
        };
        const rt = yield MTMtag.create(tag);
        console.log(rt);
        tag.id = rt[0].ID;
        tag.name = "test " + new Date();
        yield MTMtag.update(tag);
    }
    catch (err) {
        console.log(err);
    }
    try {
        const result = yield MTMTrigger_1.default.getAll();
        result.forEach((tag) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            console.log("Deleting ", tag);
            yield MTMtag.delete(tag);
        }));
    }
    catch (err) {
        console.log(err);
    }
    console.log("Done");
}))();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTVRNVHJpZ2dlci50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21vZGVscy9NVE1UcmlnZ2VyLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkNBQXFFO0FBRXJFLENBQUMsR0FBUyxFQUFFO0lBQ1IsTUFBTSxNQUFNLEdBQUcsSUFBSSxvQkFBVSxFQUFFLENBQUM7SUFDaEMsSUFBSTtRQUNBLE1BQU0sR0FBRyxHQUFpQjtZQUN0QixJQUFJLEVBQUUsTUFBTTtZQUNaLElBQUksRUFBRSxjQUFjO1lBQ3BCLFVBQVUsRUFBRSxJQUFJLElBQUksRUFBRTtZQUN0QixJQUFJLEVBQUUsd0JBQVcsQ0FBQyxTQUFTO1NBQzlCLENBQUM7UUFDRixNQUFNLEVBQUUsR0FBRyxNQUFNLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBbUIsQ0FBQyxDQUFBO1FBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDaEIsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ2xCLEdBQUcsQ0FBQyxJQUFJLEdBQUcsT0FBTyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDaEMsTUFBTSxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQW1CLENBQUMsQ0FBQTtLQUUzQztJQUFDLE9BQU8sR0FBRyxFQUFFO1FBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNwQjtJQUNELElBQUk7UUFDQSxNQUFNLE1BQU0sR0FBRyxNQUFNLG9CQUFVLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDekMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFNLEdBQUcsRUFBQyxFQUFFO1lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1lBQzdCLE1BQU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFtQixDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFBLENBQUMsQ0FBQTtLQUNMO0lBQUMsT0FBTyxHQUFHLEVBQUU7UUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3BCO0lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUN2QixDQUFDLENBQUEsQ0FBQyxFQUFFLENBQUEifQ==