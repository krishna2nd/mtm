/// <reference types="node" />
import BaseRenderer, { IRenderer } from "./base";
export default class MTMRenderer extends BaseRenderer implements IRenderer {
    protected content: Buffer;
    constructor();
    private inject;
    render(): Promise<Buffer>;
    private Interpolate;
    private getVariables;
    private getAllTriggerTag;
}
//# sourceMappingURL=index.d.ts.map