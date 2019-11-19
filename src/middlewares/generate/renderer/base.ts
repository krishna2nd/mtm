import * as fs from "fs";

export interface IRenderer {
    render(): Buffer;
}
export default class BaseRenderer implements IRenderer {
    protected content: Buffer;
    constructor() {
    }
    render(): Buffer {
        this.content = new Buffer(fs.readFileSync("dist/public/jquery.js", { encoding: "utf-8", flag: 'r' }));
        return this.content;
    }
}