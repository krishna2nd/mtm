"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const MTMVariable_1 = require("../../models/MTMVariable");
const URL_BASE = "/variables";
const mtmVar = new MTMVariable_1.default();
exports.default = (app) => {
    app.get(URL_BASE, (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        res.json(yield MTMVariable_1.default.getAll());
    }));
    app.get(`${URL_BASE}/:id`, (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        res.json(yield mtmVar.get(req.params.id));
    }));
    app.put(URL_BASE, (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        res.json(yield mtmVar.create(req.body));
    }));
    app.post(`${URL_BASE}/:id`, (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const trigger = req.body;
        trigger.id = trigger.id || req.params.id || req.query.id;
        res.json(yield mtmVar.update(trigger));
    }));
    app.delete(`${URL_BASE}/:id`, (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const trigger = req.body;
        trigger.id = trigger.id || req.params.id || req.query.id;
        res.json(yield mtmVar.delete(trigger));
    }));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbWlkZGxld2FyZXMvdmFyaWFibGVzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDBEQUF3RTtBQUV4RSxNQUFNLFFBQVEsR0FBVyxZQUFZLENBQUM7QUFDdEMsTUFBTSxNQUFNLEdBQUcsSUFBSSxxQkFBVyxFQUFFLENBQUM7QUFFakMsa0JBQWUsQ0FBQyxHQUFHLEVBQUUsRUFBRTtJQUNuQixHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFPLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtRQUNqQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0scUJBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFBO0lBQ3hDLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFDSCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxNQUFNLEVBQUUsQ0FBTyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7UUFDNUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFDSCxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFPLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtRQUNuQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUMxQyxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBQ0gsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLFFBQVEsTUFBTSxFQUFFLENBQU8sR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO1FBQzdDLE1BQU0sT0FBTyxHQUFvQixHQUFHLENBQUMsSUFBdUIsQ0FBQztRQUM3RCxPQUFPLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQyxFQUFFLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7UUFDekQsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUN6QyxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBQ0gsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLFFBQVEsTUFBTSxFQUFFLENBQU8sR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO1FBQy9DLE1BQU0sT0FBTyxHQUFvQixHQUFHLENBQUMsSUFBdUIsQ0FBQztRQUM3RCxPQUFPLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQyxFQUFFLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7UUFDekQsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUN6QyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDIn0=