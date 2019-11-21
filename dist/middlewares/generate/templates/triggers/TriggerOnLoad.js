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
            eval('${this.body || ''}')
        });`);
    }
}
exports.default = TriggerOnLoad;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJpZ2dlck9uTG9hZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9taWRkbGV3YXJlcy9nZW5lcmF0ZS90ZW1wbGF0ZXMvdHJpZ2dlcnMvVHJpZ2dlck9uTG9hZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE1BQXFCLGFBQWE7SUFJOUIsWUFBWSxFQUFVLEVBQUUsSUFBWSxFQUFFLFdBQW9CLEdBQUc7UUFDekQsSUFBSSxDQUFDLEVBQUUsR0FBRSxFQUFFLENBQUM7UUFDWixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUM3QixDQUFDO0lBQ00sTUFBTTtRQUNULE9BQU8sSUFBSSxNQUFNLENBQUM7b0JBQ04sSUFBSSxDQUFDLElBQUksSUFBRSxFQUFFO1lBQ3JCLENBQUMsQ0FBQztJQUNWLENBQUM7Q0FDSjtBQWRELGdDQWNDIn0=