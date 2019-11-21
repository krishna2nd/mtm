/// <reference types="node" />
import { IRenderer } from "../base";
export default class TriggerOnClick implements IRenderer {
    id: string;
    selector: string;
    body: string;
    constructor(id: string, body: string, selector?: string);
    render(): Buffer;
}
//# sourceMappingURL=TriggerOnClick.d.ts.map