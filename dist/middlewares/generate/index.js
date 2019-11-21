"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const renderer_1 = require("./renderer");
const URL_BASE = "/mtm.js";
exports.default = (app) => {
    app.get(URL_BASE, (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const mtmRenderer = new renderer_1.default();
        res.type('application/javascript; charset=UTF-8').send(yield mtmRenderer.render());
    }));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbWlkZGxld2FyZXMvZ2VuZXJhdGUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EseUNBQXFDO0FBRXJDLE1BQU0sUUFBUSxHQUFXLFNBQVMsQ0FBQztBQUVuQyxrQkFBZSxDQUFDLEdBQUcsRUFBRSxFQUFFO0lBQ25CLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQU8sR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO1FBQ2pDLE1BQU0sV0FBVyxHQUFHLElBQUksa0JBQVcsRUFBRSxDQUFDO1FBQ3RDLEdBQUcsQ0FBQyxJQUFJLENBQUMsdUNBQXVDLENBQUMsQ0FBQyxJQUFJLENBQ2xELE1BQU0sV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUM3QixDQUFBO0lBQ0wsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyJ9