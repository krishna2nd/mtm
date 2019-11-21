"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
//import MTMTagItem, { ITagItem } from "../../../models/MTMTag";
const base_1 = require("./base");
const TriggerOnClick_1 = require("./triggers/TriggerOnClick");
const TriggerOnLoad_1 = require("./triggers/TriggerOnLoad");
const TriggerOnEvent_1 = require("./triggers/TriggerOnEvent");
const MTMTag_1 = require("../../../models/MTMTag");
const MTMTrigger_1 = require("../../../models/MTMTrigger");
const MTMVariable_1 = require("../../../models/MTMVariable");
class MTMRenderer extends base_1.default {
    constructor() {
        super();
    }
    inject(trigger) {
        return this.content = Buffer.concat([this.content, Buffer.from(trigger.render())]);
    }
    render() {
        const _super = Object.create(null, {
            render: { get: () => super.render }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.content = yield _super.render.call(this);
            const triggers = yield this.getAllTriggerTag();
            const variables = yield this.getVariables();
            triggers.forEach((trigger) => {
                if (trigger.type === MTMTrigger_1.TriggerType.CLICK || trigger.type === MTMTrigger_1.TriggerType.SELECTED_CLICK) {
                    trigger.tags.forEach((tag) => {
                        this.inject(new TriggerOnClick_1.default(`${trigger.name} + ${tag.name}`, this.Interpolate(variables, tag.body), trigger.selector));
                    });
                }
                else if (trigger.type === MTMTrigger_1.TriggerType.PAGE_LOAD) {
                    trigger.tags.forEach((tag) => {
                        this.inject(new TriggerOnLoad_1.default(`${trigger.name} + ${tag.name}`, this.Interpolate(variables, tag.body)));
                    });
                }
                else if (trigger.type === MTMTrigger_1.TriggerType.CUSTOM_EVENT) {
                    trigger.tags.forEach((tag) => {
                        console.log("TriggerType.CUSTOM_EVENT######");
                        this.inject(new TriggerOnEvent_1.default(`${trigger.name}`, trigger.body, this.Interpolate(variables, tag.body)));
                    });
                }
            });
            return this.content;
        });
    }
    Interpolate(variables = [], body) {
        let newBody = body;
        variables.map((variable) => {
            newBody = newBody.replace(new RegExp(`{{${variable.name}}}`, 'g'), variable.body || '');
        });
        return newBody;
    }
    getVariables() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield MTMVariable_1.default.getAll();
        });
    }
    getAllTriggerTag() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const tags = yield MTMTag_1.default.getAll();
            const triggers = yield MTMTrigger_1.default.getAll();
            const triggersMap = {};
            triggers.forEach(trigger => {
                trigger.tags = [];
                triggersMap[trigger.id] = trigger;
            });
            tags.forEach(tag => {
                tag.triggers.forEach(id => {
                    const trigger = triggersMap[id];
                    if (!trigger)
                        return;
                    trigger.tags.push(tag);
                });
            });
            console.log(triggers);
            return triggers;
        });
    }
}
exports.default = MTMRenderer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbWlkZGxld2FyZXMvZ2VuZXJhdGUvcmVuZGVyZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsZ0VBQWdFO0FBQ2hFLGlDQUFnRTtBQUNoRSw4REFBdUQ7QUFDdkQsNERBQXFEO0FBQ3JELDhEQUF1RDtBQUN2RCxtREFBNEQ7QUFDNUQsMkRBQXFGO0FBQ3JGLDZEQUE2RTtBQUU3RSxNQUFxQixXQUFZLFNBQVEsY0FBWTtJQUVqRDtRQUNJLEtBQUssRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUNPLE1BQU0sQ0FBQyxPQUFzQjtRQUNqQyxPQUFPLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkYsQ0FBQztJQUNZLE1BQU07Ozs7O1lBQ2YsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLE9BQU0sTUFBTSxXQUFFLENBQUM7WUFDcEMsTUFBTSxRQUFRLEdBQTBCLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDdEUsTUFBTSxTQUFTLEdBQXlCLE1BQU0sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ2xFLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUF1QixFQUFFLEVBQUU7Z0JBQ3pDLElBQUksT0FBTyxDQUFDLElBQUksS0FBSyx3QkFBVyxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLHdCQUFXLENBQUMsY0FBYyxFQUFFO29CQUNuRixPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQWUsRUFBRSxFQUFFO3dCQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksd0JBQWMsQ0FBQyxHQUFHLE9BQU8sQ0FB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