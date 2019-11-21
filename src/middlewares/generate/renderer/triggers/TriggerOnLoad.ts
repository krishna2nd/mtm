import { IRenderer } from "../base";

export default class TriggerOnLoad implements IRenderer {
    public id: string;
    public selector: string;
    public body: string;
    constructor(id: string, body: string, selector: string =  '*') {
        this.id= id;
        this.body = body;
        this.selector = selector;
    }
    public render (): Buffer {
        return new Buffer(`$(function () {
            mtm.log("${this.id}", window.dataLayer)
            ${this.body}
        });`);
    }
}
