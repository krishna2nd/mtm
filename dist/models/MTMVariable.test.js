"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const MTMVariable_1 = require("./MTMVariable");
(() => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const mtmVar = new MTMVariable_1.default();
    try {
        const tag = {
            name: "test",
            body: '"some value"',
            lastEdited: new Date(),
            type: MTMVariable_1.VariableType.CUSTOM
        };
        const rt = yield mtmVar.create(tag);
        console.log(rt);
        tag.id = rt[0].ID;
        tag.name = "test " + new Date();
        yield mtmVar.update(tag);
    }
    catch (err) {
        console.log(err);
    }
    try {
        const result = yield MTMVariable_1.default.getAll();
        result.forEach((tag) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            console.log("Deleting ", tag);
            yield mtmVar.delete(tag);
        }));
    }
    catch (err) {
        console.log(err);
    }
    console.log("Done");
}))();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTVRNVmFyaWFibGUudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvTVRNVmFyaWFibGUudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrQ0FBeUU7QUFFekUsQ0FBQyxHQUFTLEVBQUU7SUFDUixNQUFNLE1BQU0sR0FBRyxJQUFJLHFCQUFXLEVBQUUsQ0FBQztJQUNqQyxJQUFJO1FBQ0EsTUFBTSxHQUFHLEdBQWtCO1lBQ3ZCLElBQUksRUFBRSxNQUFNO1lBQ1osSUFBSSxFQUFFLGNBQWM7WUFDcEIsVUFBVSxFQUFFLElBQUksSUFBSSxFQUFFO1lBQ3RCLElBQUksRUFBRSwwQkFBWSxDQUFDLE1BQU07U0FDNUIsQ0FBQztRQUNGLE1BQU0sRUFBRSxHQUFHLE1BQU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFvQixDQUFDLENBQUE7UUFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNoQixHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDbEIsR0FBRyxDQUFDLElBQUksR0FBRyxPQUFPLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUNoQyxNQUFNLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBb0IsQ0FBQyxDQUFBO0tBRTVDO0lBQUMsT0FBTyxHQUFHLEVBQUU7UUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3BCO0lBQ0QsSUFBSTtRQUNBLE1BQU0sTUFBTSxHQUFHLE1BQU0scUJBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMxQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQU0sR0FBRyxFQUFDLEVBQUU7WUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUE7WUFDN0IsTUFBTSxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQW9CLENBQUMsQ0FBQztRQUM5QyxDQUFDLENBQUEsQ0FBQyxDQUFBO0tBQ0w7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDcEI7SUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0FBQ3ZCLENBQUMsQ0FBQSxDQUFDLEVBQUUsQ0FBQSJ9