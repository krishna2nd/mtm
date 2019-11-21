"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TriggerOnLoad {
    constructor(id, body, selector = '*') {
        this.id = id;
        this.body = body;
        this.selector = selector;
    }
    render() {
        return new Buffer(`$(function () {
            mtm.log("${this.id}", window.dataLayer)
            ${this.body}
        });`);
    }
}
exports.default = TriggerOnLoad;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJpZ2dlck9uTG9hZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9taWRkbGV3YXJlcy9nZW5lcmF0ZS9yZW5kZXJlci90cmlnZ2Vycy9UcmlnZ2VyT25Mb2FkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsTUFBcUIsYUFBYTtJQUk5QixZQUFZLEVBQVUsRUFBRSxJQUFZLEVBQUUsV0FBb0IsR0FBRztRQUN6RCxJQUFJLENBQUMsRUFBRSxHQUFFLEVBQUUsQ0FBQztRQUNaLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7SUFDTSxNQUFNO1FBQ1QsT0FBTyxJQUFJLE1BQU0sQ0FBQzt1QkFDSCxJQUFJLENBQUMsRUFBRTtjQUNoQixJQUFJLENBQUMsSUFBSTtZQUNYLENBQUMsQ0FBQztJQUNWLENBQUM7Q0FDSjtBQWZELGdDQWVDIn0=