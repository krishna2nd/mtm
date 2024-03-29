//import MTMTagItem, { ITagItem } from "../../../models/MTMTag";
import BaseRenderer, { IRenderer, IRendererSync } from "./base";
import TriggerOnClick from "./triggers/TriggerOnClick";
import TriggerOnLoad from './triggers/TriggerOnLoad';
import TriggerOnEvent from './triggers/TriggerOnEvent';
import MTMTag, { MTMTagItem } from "../../../models/MTMTag";
import MTMTrigger, { MTMTriggerItem, TriggerType } from "../../../models/MTMTrigger";
import MTMVariableItem, { IVariableItem } from '../../../models/MTMVariable';

export default class MTMRenderer extends BaseRenderer implements IRenderer {
    protected content: Buffer;
    constructor() {
        super();
    }
    private inject(trigger: IRendererSync): Buffer {
        return this.content = Buffer.concat([this.content, Buffer.from(trigger.render())]);
    }
    public async render(): Promise<Buffer> {
        this.content = await super.render();
        const triggers: Array<MTMTriggerItem> = await this.getAllTriggerTag();
        const variables: Array<IVariableItem> = await this.getVariables();
        triggers.forEach((trigger: MTMTriggerItem) => {
            if (trigger.type === TriggerType.CLICK || trigger.type === TriggerType.SELECTED_CLICK) {
                trigger.tags.forEach((tag: MTMTagItem) => {
                    this.inject(new TriggerOnClick(`${trigger.name} + ${tag.name}`, this.Interpolate(variables, tag.body), trigger.selector || trigger.body))
                });
            } else if (trigger.type === TriggerType.PAGE_LOAD) {
                trigger.tags.forEach((tag: MTMTagItem) => {
                    this.inject(new TriggerOnLoad(`${trigger.name} + ${tag.name}`, this.Interpolate(variables, tag.body)))
                });
            } else if (trigger.type === TriggerType.CUSTOM_EVENT) {
                trigger.tags.forEach((tag: MTMTagItem) => {
                    console.log("TriggerType.CUSTOM_EVENT######")
                    this.inject(new TriggerOnEvent(`${trigger.name}`, trigger.body, this.Interpolate(variables, tag.body)))
                });
            }
        })
        return this.content;
    }
    private Interpolate(variables: Array<IVariableItem> = [], body: string): string {
        let newBody = body;
        variables.map((variable) => {
            newBody = newBody.replace(new RegExp(`{{${variable.name}}}`, 'g'), JSON.stringify(variable.body||''))
        })
        return newBody; 
    }

    private async getVariables(): Promise<Array<IVariableItem>> {
        return await MTMVariableItem.getAll();
    }
    private async getAllTriggerTag(): Promise<Array<MTMTriggerItem>> {
        const tags = await MTMTag.getAll();
        const triggers: any = await MTMTrigger.getAll();
        const triggersMap: any = {};
        triggers.forEach(trigger => {
            trigger.tags = [];
            triggersMap[trigger.id] = trigger;
        })
        tags.forEach(tag => {
            tag.triggers.forEach(id => {
                const trigger = triggersMap[id];
                if (!trigger) return;
                trigger.tags.push(tag);
            })
        });
        console.log(triggers);
        return triggers;
    }
}
