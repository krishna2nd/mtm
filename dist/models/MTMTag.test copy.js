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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTVRNVGFnLnRlc3QgY29weS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvTVRNVGFnLnRlc3QgY29weS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBZ0Q7QUFFaEQsQ0FBQyxHQUFTLEVBQUU7SUFDUixNQUFNLE1BQU0sR0FBRyxJQUFJLGdCQUFVLEVBQUUsQ0FBQztJQUNoQyxJQUFJO1FBQ0EsTUFBTSxHQUFHLEdBQWE7WUFDbEIsSUFBSSxFQUFFLE1BQU07WUFDWixRQUFRLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO1lBQ3BCLElBQUksRUFBRSxjQUFjO1lBQ3BCLFVBQVUsRUFBRSxJQUFJLElBQUksRUFBRTtZQUN0QixJQUFJLEVBQUUsT0FBTztTQUNoQixDQUFDO1FBQ0YsTUFBTSxFQUFFLEdBQUcsTUFBTSxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQWUsQ0FBQyxDQUFBO1FBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDaEIsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ2xCLEdBQUcsQ0FBQyxJQUFJLEdBQUcsT0FBTyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDaEMsTUFBTSxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQWUsQ0FBQyxDQUFBO0tBRXZDO0lBQUMsT0FBTyxHQUFHLEVBQUU7UUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3BCO0lBQ0QsSUFBSTtRQUNBLE1BQU0sTUFBTSxHQUFHLE1BQU0sZ0JBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN6QyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQU0sR0FBRyxFQUFDLEVBQUU7WUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUE7WUFDN0IsTUFBTSxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQWUsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQSxDQUFDLENBQUE7S0FDTDtJQUFDLE9BQU8sR0FBRyxFQUFFO1FBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNwQjtJQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7QUFDdkIsQ0FBQyxDQUFBLENBQUMsRUFBRSxDQUFBIn0=