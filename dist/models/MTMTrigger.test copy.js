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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTVRNVHJpZ2dlci50ZXN0IGNvcHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbW9kZWxzL01UTVRyaWdnZXIudGVzdCBjb3B5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZDQUFxRTtBQUVyRSxDQUFDLEdBQVMsRUFBRTtJQUNSLE1BQU0sTUFBTSxHQUFHLElBQUksb0JBQVUsRUFBRSxDQUFDO0lBQ2hDLElBQUk7UUFDQSxNQUFNLEdBQUcsR0FBaUI7WUFDdEIsSUFBSSxFQUFFLE1BQU07WUFDWixJQUFJLEVBQUUsY0FBYztZQUNwQixVQUFVLEVBQUUsSUFBSSxJQUFJLEVBQUU7WUFDdEIsSUFBSSxFQUFFLHdCQUFXLENBQUMsU0FBUztTQUM5QixDQUFDO1FBQ0YsTUFBTSxFQUFFLEdBQUcsTUFBTSxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQW1CLENBQUMsQ0FBQTtRQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hCLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNsQixHQUFHLENBQUMsSUFBSSxHQUFHLE9BQU8sR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ2hDLE1BQU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFtQixDQUFDLENBQUE7S0FFM0M7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDcEI7SUFDRCxJQUFJO1FBQ0EsTUFBTSxNQUFNLEdBQUcsTUFBTSxvQkFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3pDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBTSxHQUFHLEVBQUMsRUFBRTtZQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQTtZQUM3QixNQUFNLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBbUIsQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FBQSxDQUFDLENBQUE7S0FDTDtJQUFDLE9BQU8sR0FBRyxFQUFFO1FBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNwQjtJQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7QUFDdkIsQ0FBQyxDQUFBLENBQUMsRUFBRSxDQUFBIn0=