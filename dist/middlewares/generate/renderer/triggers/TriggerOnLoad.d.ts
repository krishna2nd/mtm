/// <reference types="node" />
import { IRenderer } from "../base";
export default class TriggerOnLoad implements IRenderer {
    id: string;
    selector: string;
    body: string;
    constructor(id: string, body: string, selector?: string);
    render(): Buffer;
}
//# sourceMappingURL=TriggerOnLoad.d.ts.map