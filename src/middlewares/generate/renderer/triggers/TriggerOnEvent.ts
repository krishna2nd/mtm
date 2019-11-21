import { IRenderer } from "../base";

export default class TriggerOnEvent implements IRenderer {
    public id: string;
    public event: string;
    public body: string;
    constructor(id: string, event: string, body: string, ) {
        this.id = id;
        this.body = body;
        this.event = event;
    }
    public render(): Buffer {
        return new Buffer(`$(function () {
            $(window).on('${this.event}', function () {mtm.log("${this.id}", event);${this.body.toString()}; }) });`);
    }
}
