import { IRenderer } from "../base";

const DEFAULT_SELECTOR = 'body, body *';
export default class TriggerOnClick implements IRenderer {
    public id: string;
    public selector: string;
    public body: string;
    constructor(id: string, body: string, selector: string = DEFAULT_SELECTOR) {
        this.id = id;
        this.body = body;
        this.selector = selector;
    }
    public render(): Buffer {
        return new Buffer(this.selector === DEFAULT_SELECTOR ? `$(function () {
            var ele = \$("${this.selector}");
             ele.on('click', function (event) {
                event.preventDefault();
                if ($(event.currentTarget).attr('mtm.event')) return;
                ${this.body.toString()}
                })  
            });`: `$(function () {
            var ele = \$("${this.selector}");
             ele.attr('mtm.event', true);
             ele.on('click', function (event) {
                event.preventDefault();
                ${this.body.toString()}
                })  
            });`);
    }
}
