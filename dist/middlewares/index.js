"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tags_1 = require("./tags");
const triggers_1 = require("./triggers");
const variables_1 = require("./variables");
const generate_1 = require("./generate");
exports.default = (app) => {
    tags_1.default(app);
    triggers_1.default(app);
    variables_1.default(app);
    generate_1.default(app);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbWlkZGxld2FyZXMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpQ0FBb0M7QUFDcEMseUNBQTBDO0FBQzFDLDJDQUE2QztBQUM3Qyx5Q0FBd0M7QUFFeEMsa0JBQWUsQ0FBQyxHQUFHLEVBQUUsRUFBRTtJQUNuQixjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDcEIsa0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEIsbUJBQWtCLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDeEIsa0JBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN4QixDQUFDLENBQUMifQ==