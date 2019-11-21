/// <reference types="node" />
import { IRenderer } from "../base";
export default class TriggerOnEvent implements IRenderer {
    id: string;
    event: string;
    body: string;
    constructor(id: string, event: string, body: string);
    render(): Buffer;
}
//# sourceMappingURL=TriggerOnEvent.d.ts.map