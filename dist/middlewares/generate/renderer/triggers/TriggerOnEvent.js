"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TriggerOnEvent {
    constructor(id, event, body) {
        this.id = id;
        this.body = body;
        this.event = event;
    }
    render() {
        return new Buffer(`$(function () {
            $(window).on('${this.event}', function () {mtm.log("${this.id}", event);${this.body.toString()}; }) });`);
    }
}
exports.default = TriggerOnEvent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJpZ2dlck9uRXZlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbWlkZGxld2FyZXMvZ2VuZXJhdGUvcmVuZGVyZXIvdHJpZ2dlcnMvVHJpZ2dlck9uRXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxNQUFxQixjQUFjO0lBSS9CLFlBQVksRUFBVSxFQUFFLEtBQWEsRUFBRSxJQUFZO1FBQy9DLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUNNLE1BQU07UUFDVCxPQUFPLElBQUksTUFBTSxDQUFDOzRCQUNFLElBQUksQ0FBQyxLQUFLLDRCQUE0QixJQUFJLENBQUMsRUFBRSxhQUFhLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ2xILENBQUM7Q0FDSjtBQWJELGlDQWFDIn0=