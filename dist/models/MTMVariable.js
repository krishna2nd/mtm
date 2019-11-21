"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const MTMDataStore_1 = require("./db/MTMDataStore");
const ModelQueryStatement_1 = require("./db/ModelQueryStatement");
var VariableType;
(function (VariableType) {
    VariableType["FUNCTION"] = "function";
    VariableType["CUSTOM"] = "custom";
    VariableType["DATA_LAYER"] = "data_layer";
    VariableType["COOKIE"] = "cookie";
})(VariableType = exports.VariableType || (exports.VariableType = {}));
;
class MTMVariableItem {
    constructor() {
        this.lastEdited = new Date();
        this.table = "VARIABLES";
        MTMVariableItem.query = new ModelQueryStatement_1.default(this.table, {
            SELECT: "SELECT * FROM {TABLE} WHERE ID=?",
            SELECT_ALL: "SELECT * FROM {TABLE}",
            INSERT: `INSERT INTO {TABLE} ("DATA") VALUES (?)`,
            DELETE: `DELETE FROM {TABLE} WHERE ID=?`,
            UPDATE: `UPDATE {TABLE} SET "DATA" = ? WHERE ID=?`
        });
        MTMVariableItem.store = MTMDataStore_1.default.getInstance();
    }
    get(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let value = yield MTMVariableItem.store.Select(MTMVariableItem.query.SELECT, id);
            value = value[0] && value[0].DATA || "{}";
            return JSON.parse(value);
        });
    }
    create(variable) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const value = MTMVariableItem.store.Insert(MTMVariableItem.query.INSERT, this.table, JSON.stringify(variable));
            return yield value;
        });
    }
    delete(variable) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const value = MTMVariableItem.store.Delete(MTMVariableItem.query.DELETE, variable.id);
            return yield value;
        });
    }
    update(variable) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield MTMVariableItem.store.Update(MTMVariableItem.query.UPDATE, JSON.stringify(variable), variable.id);
            return yield this.get(variable.id);
        });
    }
    static getAll() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const value = (yield MTMVariableItem.store.SelectAll(this.query.SELECT_ALL)) || [[]];
            return value[0].map((ele) => {
                return Object.assign(Object.assign({}, JSON.parse(ele.DATA)), { id: ele.ID });
            });
        });
    }
}
exports.MTMVariableItem = MTMVariableItem;
exports.default = MTMVariableItem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTVRNVmFyaWFibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbW9kZWxzL01UTVZhcmlhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLG9EQUE2QztBQUM3QyxrRUFBZ0Y7QUFVaEYsSUFBWSxZQUtYO0FBTEQsV0FBWSxZQUFZO0lBQ3BCLHFDQUFxQixDQUFBO0lBQ3JCLGlDQUFpQixDQUFBO0lBQ2pCLHlDQUF5QixDQUFBO0lBQ3pCLGlDQUFpQixDQUFBO0FBQ3JCLENBQUMsRUFMVyxZQUFZLEdBQVosb0JBQVksS0FBWixvQkFBWSxRQUt2QjtBQU9BLENBQUM7QUFFRixNQUFhLGVBQWU7SUFvQ3hCO1FBL0JPLGVBQVUsR0FBUyxJQUFJLElBQUksRUFBRSxDQUFDO1FBRzdCLFVBQUssR0FBVyxXQUFXLENBQUM7UUE2QmhDLGVBQWUsQ0FBQyxLQUFLLEdBQUcsSUFBSSw2QkFBbUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ3hELE1BQU0sRUFBRSxrQ0FBa0M7WUFDMUMsVUFBVSxFQUFFLHVCQUF1QjtZQUNuQyxNQUFNLEVBQUUseUNBQXlDO1lBQ2pELE1BQU0sRUFBRSxnQ0FBZ0M7WUFDeEMsTUFBTSxFQUFFLDBDQUEwQztTQUNsQyxDQUFDLENBQUM7UUFDdEIsZUFBZSxDQUFDLEtBQUssR0FBRyxzQkFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZELENBQUM7SUFwQ1ksR0FBRyxDQUFDLEVBQWtCOztZQUMvQixJQUFJLEtBQUssR0FBUSxNQUFNLGVBQWUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFBO1lBQ3JGLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUM7WUFDMUMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBa0IsQ0FBQztRQUM5QyxDQUFDO0tBQUE7SUFDWSxNQUFNLENBQUMsUUFBdUI7O1lBQ3ZDLE1BQU0sS0FBSyxHQUFRLGVBQWUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3BILE9BQU8sTUFBTSxLQUFLLENBQUM7UUFDdkIsQ0FBQztLQUFBO0lBQ1ksTUFBTSxDQUFDLFFBQXVCOztZQUN2QyxNQUFNLEtBQUssR0FBUSxlQUFlLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDM0YsT0FBTyxNQUFNLEtBQUssQ0FBQztRQUN2QixDQUFDO0tBQUE7SUFDWSxNQUFNLENBQUMsUUFBdUI7O1lBQ3ZDLE1BQU0sZUFBZSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRSxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDeEcsT0FBTyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7S0FBQTtJQUNELE1BQU0sQ0FBTyxNQUFNOztZQUNmLE1BQU0sS0FBSyxHQUFRLENBQUEsTUFBTSxlQUFlLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDeEYsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBUSxFQUFpQixFQUFFO2dCQUM1QyxPQUFPLGdDQUNBLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUN2QixFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUUsR0FDSSxDQUFBO1lBQ3RCLENBQUMsQ0FBQyxDQUFBO1FBQ04sQ0FBQztLQUFBO0NBWUo7QUE5Q0QsMENBOENDO0FBRUQsa0JBQWUsZUFBZSxDQUFDIn0=