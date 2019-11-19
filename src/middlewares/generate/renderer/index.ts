//import MTMTagItem, { ITagItem } from "../../../models/MTMTag";
import BaseRenderer, { IRenderer } from "./base";
import TriggerOnClick from "./triggers/TriggerOnClick";
import TriggerOnLoad from './triggers/TriggerOnLoad';

export default class MTMRenderer extends BaseRenderer implements IRenderer {
    constructor() {
        super();
        super.render();
    }
    private inject(trigger: IRenderer): Buffer {
       return  this.content = Buffer.concat([this.content, Buffer.from(trigger.render())]);
    }
    public render(): Buffer {
        
        const cTrigger = new TriggerOnClick("test", 'alert("test")');
        const loadTrigger = new TriggerOnLoad("test", 'alert("test load")');
        //const allTags: Array<ITagItem> = MTMTagItem.getAll();
        this.inject(cTrigger)
        this.inject(loadTrigger)
        return this.content;
    }
}
