"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const MTMDataStore_1 = require("./db/MTMDataStore");
const ModelQueryStatement_1 = require("./db/ModelQueryStatement");
var TriggerType;
(function (TriggerType) {
    TriggerType["CLICK"] = "click";
    TriggerType["SELECTED_CLICK"] = "selected_click";
    TriggerType["PAGE_LOAD"] = "page_load";
    TriggerType["CUSTOM_EVENT"] = "custom_event";
})(TriggerType = exports.TriggerType || (exports.TriggerType = {}));
;
class MTMTriggerItem {
    constructor() {
        this.table = 'TRIGGERS';
        MTMTriggerItem.query = new ModelQueryStatement_1.default(this.table, {
            SELECT: "SELECT * FROM {TABLE} WHERE ID=?",
            SELECT_ALL: "SELECT * FROM {TABLE}",
            INSERT: `INSERT INTO {TABLE} ("DATA") VALUES (?)`,
            DELETE: `DELETE FROM {TABLE} WHERE ID=?`,
            UPDATE: `UPDATE {TABLE} SET "DATA" = ? WHERE ID=?`
        });
        MTMTriggerItem.store = MTMDataStore_1.default.getInstance();
    }
    get(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let value = yield MTMTriggerItem.store.Select(MTMTriggerItem.query.SELECT, id);
            value = value[0] && value[0].DATA || "{}";
            return JSON.parse(value);
        });
    }
    create(trigger) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const value = MTMTriggerItem.store.Insert(MTMTriggerItem.query.INSERT, this.table, JSON.stringify(trigger));
            return yield value;
        });
    }
    delete(trigger) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const value = MTMTriggerItem.store.Delete(MTMTriggerItem.query.DELETE, trigger.id);
            return yield value;
        });
    }
    update(trigger) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield MTMTriggerItem.store.Update(MTMTriggerItem.query.UPDATE, JSON.stringify(trigger), trigger.id);
            return yield this.get(trigger.id);
        });
    }
    static getAll() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const value = (yield MTMTriggerItem.store.SelectAll(this.query.SELECT_ALL)) || [[]];
            return value[0].map((ele) => {
                return Object.assign(Object.assign({}, JSON.parse(ele.DATA)), { id: ele.ID });
            });
        });
    }
}
exports.MTMTriggerItem = MTMTriggerItem;
exports.default = MTMTriggerItem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTVRNVHJpZ2dlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvTVRNVHJpZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxvREFBNkM7QUFDN0Msa0VBQWdGO0FBWWhGLElBQVksV0FLWDtBQUxELFdBQVksV0FBVztJQUNuQiw4QkFBZSxDQUFBO0lBQ2YsZ0RBQWlDLENBQUE7SUFDakMsc0NBQXVCLENBQUE7SUFDdkIsNENBQTZCLENBQUE7QUFDakMsQ0FBQyxFQUxXLFdBQVcsR0FBWCxtQkFBVyxLQUFYLG1CQUFXLFFBS3RCO0FBT0EsQ0FBQztBQUVGLE1BQWEsY0FBYztJQXNDdkI7UUE1QlEsVUFBSyxHQUFXLFVBQVUsQ0FBQztRQTZCL0IsY0FBYyxDQUFDLEtBQUssR0FBRyxJQUFJLDZCQUFtQixDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDdkQsTUFBTSxFQUFFLGtDQUFrQztZQUMxQyxVQUFVLEVBQUUsdUJBQXVCO1lBQ25DLE1BQU0sRUFBRSx5Q0FBeUM7WUFDakQsTUFBTSxFQUFFLGdDQUFnQztZQUN4QyxNQUFNLEVBQUUsMENBQTBDO1NBQ2xDLENBQUMsQ0FBQztRQUN0QixjQUFjLENBQUMsS0FBSyxHQUFHLHNCQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdEQsQ0FBQztJQXBDWSxHQUFHLENBQUMsRUFBa0I7O1lBQy9CLElBQUksS0FBSyxHQUFRLE1BQU0sY0FBYyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUE7WUFDbkYsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQztZQUMxQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFpQixDQUFDO1FBQzdDLENBQUM7S0FBQTtJQUNZLE1BQU0sQ0FBQyxPQUFxQjs7WUFDckMsTUFBTSxLQUFLLEdBQVEsY0FBYyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDakgsT0FBTyxNQUFNLEtBQUssQ0FBQztRQUN2QixDQUFDO0tBQUE7SUFDWSxNQUFNLENBQUMsT0FBcUI7O1lBQ3JDLE1BQU0sS0FBSyxHQUFRLGNBQWMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN4RixPQUFPLE1BQU0sS0FBSyxDQUFDO1FBQ3ZCLENBQUM7S0FBQTtJQUNZLE1BQU0sQ0FBQyxPQUFxQjs7WUFDckMsTUFBTSxjQUFjLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNwRyxPQUFPLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdEMsQ0FBQztLQUFBO0lBQ0QsTUFBTSxDQUFPLE1BQU07O1lBQ2YsTUFBTSxLQUFLLEdBQVEsQ0FBQSxNQUFNLGNBQWMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN2RixPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFRLEVBQWdCLEVBQUU7Z0JBQzNDLE9BQU8sZ0NBQ0EsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQ3ZCLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxHQUNHLENBQUE7WUFDckIsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDO0tBQUE7Q0FZSjtBQWhERCx3Q0FnREM7QUFFRCxrQkFBZSxjQUFjLENBQUMifQ==