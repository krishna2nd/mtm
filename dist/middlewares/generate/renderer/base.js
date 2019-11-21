"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
class BaseRenderer {
    constructor() {
    }
    render() {
        return new Promise((resolve, reject) => {
            if (this.baseContent)
                resolve(this.baseContent);
            fs.readFile("dist/public/jquery.js", { encoding: "utf-8", flag: 'r' }, (err, data) => {
                if (err)
                    return reject(err);
                this.baseContent = new Buffer(data);
                resolve(this.baseContent);
            });
        });
    }
}
exports.default = BaseRenderer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9taWRkbGV3YXJlcy9nZW5lcmF0ZS9yZW5kZXJlci9iYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUJBQXlCO0FBUXpCLE1BQXFCLFlBQVk7SUFFN0I7SUFDQSxDQUFDO0lBQ0QsTUFBTTtRQUNGLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDbkMsSUFBSSxJQUFJLENBQUMsV0FBVztnQkFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ2hELEVBQUUsQ0FBQyxRQUFRLENBQUMsdUJBQXVCLEVBQUUsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRTtnQkFDakYsSUFBSyxHQUFHO29CQUFFLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUM3QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBO2dCQUNuQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0o7QUFkRCwrQkFjQyJ9