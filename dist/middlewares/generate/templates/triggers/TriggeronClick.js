"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TriggerOnClick {
    constructor(id, body, selector = '*') {
        this.id = id;
        this.body = body;
        this.selector = selector;
    }
    render() {
        return new Buffer(`$(function () {
            \$("${this.selector}").on('click', function () {
            eval('${this.body || ''}')
        })  
    });`);
    }
}
exports.default = TriggerOnClick;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJpZ2dlck9uQ2xpY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbWlkZGxld2FyZXMvZ2VuZXJhdGUvdGVtcGxhdGVzL3RyaWdnZXJzL1RyaWdnZXJPbkNsaWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBcUIsY0FBYztJQUkvQixZQUFZLEVBQVUsRUFBRSxJQUFZLEVBQUUsV0FBb0IsR0FBRztRQUN6RCxJQUFJLENBQUMsRUFBRSxHQUFFLEVBQUUsQ0FBQztRQUNaLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7SUFDTSxNQUFNO1FBQ1QsT0FBTyxJQUFJLE1BQU0sQ0FBQztrQkFDUixJQUFJLENBQUMsUUFBUTtvQkFDWCxJQUFJLENBQUMsSUFBSSxJQUFFLEVBQUU7O1FBRXpCLENBQUMsQ0FBQztJQUNOLENBQUM7Q0FDSjtBQWhCRCxpQ0FnQkMifQ==