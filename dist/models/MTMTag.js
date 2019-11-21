"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const MTMDataStore_1 = require("./db/MTMDataStore");
const ModelQueryStatement_1 = require("./db/ModelQueryStatement");
;
class MTMTagItem {
    constructor() {
        this.table = 'TAGS';
        MTMTagItem.query = new ModelQueryStatement_1.default(this.table, {
            SELECT: "SELECT * FROM {TABLE} WHERE ID=?",
            SELECT_ALL: "SELECT * FROM {TABLE}",
            INSERT: `INSERT INTO {TABLE} ("DATA") VALUES (?)`,
            DELETE: `DELETE FROM {TABLE} WHERE ID=?`,
            UPDATE: `UPDATE {TABLE} SET "DATA" = ? WHERE ID=?`
        });
        MTMTagItem.store = MTMDataStore_1.default.getInstance();
    }
    get(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let value = yield MTMTagItem.store.Select(MTMTagItem.query.SELECT, id);
            value = value[0] && value[0].DATA || "{}";
            return JSON.parse(value);
        });
    }
    create(tag) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const value = MTMTagItem.store.Insert(MTMTagItem.query.INSERT, this.table, JSON.stringify(tag));
            return yield value;
        });
    }
    delete(tag) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const value = MTMTagItem.store.Delete(MTMTagItem.query.DELETE, tag.id);
            return yield value;
        });
    }
    update(tag) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield MTMTagItem.store.Update(MTMTagItem.query.UPDATE, JSON.stringify(tag), tag.id);
            return yield this.get(tag.id);
        });
    }
    static getAll() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const value = (yield MTMTagItem.store.SelectAll(this.query.SELECT_ALL)) || [[]];
            return value[0].map((ele) => {
                return Object.assign(Object.assign({}, JSON.parse(ele.DATA)), { id: ele.ID });
            });
        });
    }
}
exports.MTMTagItem = MTMTagItem;
exports.default = MTMTagItem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTVRNVGFnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21vZGVscy9NVE1UYWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsb0RBQTZDO0FBQzdDLGtFQUFnRjtBQWlCL0UsQ0FBQztBQUVGLE1BQWEsVUFBVTtJQXFDbkI7UUE1QlEsVUFBSyxHQUFXLE1BQU0sQ0FBQztRQTZCM0IsVUFBVSxDQUFDLEtBQUssR0FBRyxJQUFJLDZCQUFtQixDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDbkQsTUFBTSxFQUFFLGtDQUFrQztZQUMxQyxVQUFVLEVBQUUsdUJBQXVCO1lBQ25DLE1BQU0sRUFBRSx5Q0FBeUM7WUFDakQsTUFBTSxFQUFFLGdDQUFnQztZQUN4QyxNQUFNLEVBQUUsMENBQTBDO1NBQ2xDLENBQUMsQ0FBQztRQUN0QixVQUFVLENBQUMsS0FBSyxHQUFHLHNCQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEQsQ0FBQztJQXBDWSxHQUFHLENBQUMsRUFBbUI7O1lBQ2hDLElBQUksS0FBSyxHQUFRLE1BQU0sVUFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUE7WUFDM0UsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQztZQUMxQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFhLENBQUM7UUFDekMsQ0FBQztLQUFBO0lBQ1ksTUFBTSxDQUFDLEdBQWE7O1lBQzdCLE1BQU0sS0FBSyxHQUFRLFVBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3JHLE9BQU8sTUFBTSxLQUFLLENBQUM7UUFDdEIsQ0FBQztLQUFBO0lBQ1csTUFBTSxDQUFDLEdBQWE7O1lBQzdCLE1BQU0sS0FBSyxHQUFRLFVBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM1RSxPQUFPLE1BQU0sS0FBSyxDQUFDO1FBQ3ZCLENBQUM7S0FBQTtJQUNZLE1BQU0sQ0FBQyxHQUFhOztZQUM3QixNQUFNLFVBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3BGLE9BQU8sTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNsQyxDQUFDO0tBQUE7SUFDRCxNQUFNLENBQU8sTUFBTTs7WUFDZixNQUFNLEtBQUssR0FBUSxDQUFBLE1BQU0sVUFBVSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ25GLE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQVEsRUFBWSxFQUFFO2dCQUN2QyxPQUFPLGdDQUNBLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUN2QixFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUUsR0FDQSxDQUFBO1lBQ2xCLENBQUMsQ0FBQyxDQUFBO1FBQ04sQ0FBQztLQUFBO0NBWUo7QUEvQ0QsZ0NBK0NDO0FBSUQsa0JBQWUsVUFBVSxDQUFDIn0=