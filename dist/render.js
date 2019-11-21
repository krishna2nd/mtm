"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const renderer_1 = require("./middlewares/generate/renderer");
const fs_1 = require("fs");
const FILENAME = "./dist/public/mtm.js";
require("./models/db/MTMDataStore");
const mtmRenderer = new renderer_1.default();
(() => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    yield mtmRenderer.render();
    fs_1.default.writeFile(FILENAME, 'utf8', (err) => {
        if (err) {
            return console.log(err);
        }
    });
}))();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3JlbmRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSw4REFBMEQ7QUFDMUQsMkJBQW9CO0FBRXBCLE1BQU0sUUFBUSxHQUFXLHNCQUFzQixDQUFDO0FBQ2hELG9DQUFrQztBQUNsQyxNQUFNLFdBQVcsR0FBRyxJQUFJLGtCQUFXLEVBQUUsQ0FBQztBQUV0QyxDQUFDLEdBQVMsRUFBRTtJQUNSLE1BQU0sV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFBO0lBQzFCLFlBQUUsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFO1FBQ25DLElBQUksR0FBRyxFQUFFO1lBQ0wsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzNCO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUEsQ0FBQyxFQUFFLENBQUEifQ==