"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const MTMTag_1 = require("./MTMTag");
(() => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const MTMtag = new MTMTag_1.default();
    try {
        const tag = {
            name: "test",
            triggers: ['1', '3'],
            body: 'alert("test)',
            lastEdited: new Date(),
            type: "click"
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
        const result = yield MTMTag_1.default.getAll();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTVRNVGFnLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbW9kZWxzL01UTVRhZy50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUFnRDtBQUVoRCxDQUFDLEdBQVMsRUFBRTtJQUNSLE1BQU0sTUFBTSxHQUFHLElBQUksZ0JBQVUsRUFBRSxDQUFDO0lBQ2hDLElBQUk7UUFDQSxNQUFNLEdBQUcsR0FBYTtZQUNsQixJQUFJLEVBQUUsTUFBTTtZQUNaLFFBQVEsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7WUFDcEIsSUFBSSxFQUFFLGNBQWM7WUFDcEIsVUFBVSxFQUFFLElBQUksSUFBSSxFQUFFO1lBQ3RCLElBQUksRUFBRSxPQUFPO1NBQ2hCLENBQUM7UUFDRixNQUFNLEVBQUUsR0FBRyxNQUFNLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBZSxDQUFDLENBQUE7UUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNoQixHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDbEIsR0FBRyxDQUFDLElBQUksR0FBRyxPQUFPLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUNoQyxNQUFNLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBZSxDQUFDLENBQUE7S0FFdkM7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDcEI7SUFDRCxJQUFJO1FBQ0EsTUFBTSxNQUFNLEdBQUcsTUFBTSxnQkFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3pDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBTSxHQUFHLEVBQUMsRUFBRTtZQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQTtZQUM3QixNQUFNLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBZSxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFBLENBQUMsQ0FBQTtLQUNMO0lBQUMsT0FBTyxHQUFHLEVBQUU7UUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3BCO0lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUN2QixDQUFDLENBQUEsQ0FBQyxFQUFFLENBQUEifQ==