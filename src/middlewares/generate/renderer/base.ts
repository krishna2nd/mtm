import * as fs from "fs";

export interface IRenderer {
    render(): Buffer | Promise<Buffer>;
}
export interface IRendererSync {
    render(): Buffer;
}
export default class BaseRenderer implements IRenderer {
    protected baseContent: Buffer | Promise<Buffer>;
    constructor() {
    }
    render(): Promise<Buffer> {
        return new Promise((resolve, reject) => {
            if (this.baseContent) resolve(this.baseContent);
            fs.readFile("dist/public/jquery.js", { encoding: "utf-8", flag: 'r' }, (err, data) => {
                if  (err) return reject(err);
                this.baseContent = new Buffer(data)
                resolve(this.baseContent);
            });
        });
    }
}