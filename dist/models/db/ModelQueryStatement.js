"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ModelQueryStatement {
    constructor(table, query) {
        const tablePlaceholder = '{TABLE}';
        this.INSERT = (query.INSERT.replace(tablePlaceholder, table));
        this.UPDATE = (query.UPDATE.replace(tablePlaceholder, table));
        this.SELECT = (query.SELECT.replace(tablePlaceholder, table));
        this.SELECT_ALL = (query.SELECT_ALL.replace(tablePlaceholder, table));
        this.DELETE = (query.DELETE.replace(tablePlaceholder, table));
    }
}
exports.default = ModelQueryStatement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kZWxRdWVyeVN0YXRlbWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2RlbHMvZGIvTW9kZWxRdWVyeVN0YXRlbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQVVBLE1BQXNCLG1CQUFtQjtJQU1yQyxZQUFhLEtBQWEsRUFBRSxLQUFzQjtRQUM5QyxNQUFNLGdCQUFnQixHQUFHLFNBQVMsQ0FBQztRQUNuQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNsRSxDQUFDO0NBRUo7QUFmRCxzQ0FlQyJ9