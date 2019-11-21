"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MTMDataStore_1 = require("./MTMDataStore");
class ModelQueryStatement {
    constructor(query) {
        this.INSERT = MTMDataStore_1.ParameterizedQuery(query.INSERT);
        this.UPDATE = MTMDataStore_1.ParameterizedQuery(query.INSERT);
        this.SELECT = MTMDataStore_1.ParameterizedQuery(query.INSERT);
        this.SELECT_ALL = MTMDataStore_1.ParameterizedQuery(query.INSERT);
        this.DELETE = MTMDataStore_1.ParameterizedQuery(query.INSERT);
    }
}
exports.default = ModelQueryStatement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSVF1ZXJ5U3RhdGVtZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZGVscy9kYi9JUXVlcnlTdGF0ZW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBb0U7QUFVcEUsTUFBc0IsbUJBQW1CO0lBTXJDLFlBQWEsS0FBc0I7UUFDL0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxpQ0FBa0IsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxpQ0FBa0IsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxpQ0FBa0IsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxpQ0FBa0IsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLE1BQU0sR0FBRyxpQ0FBa0IsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkQsQ0FBQztDQUVKO0FBZEQsc0NBY0MifQ==