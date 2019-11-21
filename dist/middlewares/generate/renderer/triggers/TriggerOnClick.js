"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DEFAULT_SELECTOR = 'body, body *';
class TriggerOnClick {
    constructor(id, body, selector = DEFAULT_SELECTOR) {
        this.id = id;
        this.body = body;
        this.selector = selector;
    }
    render() {
        return new Buffer(this.selector === DEFAULT_SELECTOR ? `$(function () {
            var ele = \$("${this.selector}");
             ele.on('click', function (event) {
                mtm.log("${this.id}", event)
                event.preventDefault();
                if ($(event.currentTarget).attr('mtm.event')) return;
                ${this.body.toString()}
                })  
            });` : `$(function () {
            var ele = \$("${this.selector}");
             ele.attr('mtm.event', true);
             ele.on('click', function (event) {
                mtm.log("${this.id}", event)
                event.preventDefault();
                ${this.body.toString()}
                })  
            });`);
    }
}
exports.default = TriggerOnClick;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJpZ2dlck9uQ2xpY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbWlkZGxld2FyZXMvZ2VuZXJhdGUvcmVuZGVyZXIvdHJpZ2dlcnMvVHJpZ2dlck9uQ2xpY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxNQUFNLGdCQUFnQixHQUFHLGNBQWMsQ0FBQztBQUN4QyxNQUFxQixjQUFjO0lBSS9CLFlBQVksRUFBVSxFQUFFLElBQVksRUFBRSxXQUFtQixnQkFBZ0I7UUFDckUsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUM3QixDQUFDO0lBQ00sTUFBTTtRQUNULE9BQU8sSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7NEJBQ25DLElBQUksQ0FBQyxRQUFROzsyQkFFZCxJQUFJLENBQUMsRUFBRTs7O2tCQUdoQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTs7Z0JBRXRCLENBQUEsQ0FBQyxDQUFDOzRCQUNVLElBQUksQ0FBQyxRQUFROzs7MkJBR2QsSUFBSSxDQUFDLEVBQUU7O2tCQUVoQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTs7Z0JBRXRCLENBQUMsQ0FBQztJQUNkLENBQUM7Q0FDSjtBQTVCRCxpQ0E0QkMifQ==