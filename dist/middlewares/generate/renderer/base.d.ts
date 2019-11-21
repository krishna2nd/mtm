/// <reference types="node" />
export interface IRenderer {
    render(): Buffer | Promise<Buffer>;
}
export interface IRendererSync {
    render(): Buffer;
}
export default class BaseRenderer implements IRenderer {
    protected baseContent: Buffer | Promise<Buffer>;
    constructor();
    render(): Promise<Buffer>;
}
//# sourceMappingURL=base.d.ts.map