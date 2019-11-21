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
            triggers.forEach((trigger) => {
                if (trigger.type === MTMTrigger_1.TriggerType.CLICK || trigger.type === MTMTrigger_1.TriggerType.SELECTED_CLICK) {
                    trigger.tags.forEach((tag) => {
                        this.inject(new TriggerOnClick_1.default(`${trigger.name} + ${tag.name}`, tag.body, trigger.selector));
                    });
                }
                else if (trigger.type === MTMTrigger_1.TriggerType.PAGE_LOAD) {
                    trigger.tags.forEach((tag) => {
                        this.inject(new TriggerOnLoad_1.default(`${trigger.name} + ${tag.name}`, tag.body));
                    });
                }
                else if (trigger.type === MTMTrigger_1.TriggerType.CUSTOM_EVENT) {
                    trigger.tags.forEach((tag) => {
                        console.log("TriggerType.CUSTOM_EVENT######");
                        this.inject(new TriggerOnEvent_1.default(`${trigger.name}`, trigger.body, tag.body));
                    });
                }
            });
            return this.content;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbWlkZGxld2FyZXMvZ2VuZXJhdGUvcmVuZGVyZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsZ0VBQWdFO0FBQ2hFLGlDQUFnRTtBQUNoRSw4REFBdUQ7QUFDdkQsNERBQXFEO0FBQ3JELDhEQUF1RDtBQUN2RCxtREFBNEQ7QUFDNUQsMkRBQXFGO0FBRXJGLE1BQXFCLFdBQVksU0FBUSxjQUFZO0lBRWpEO1FBQ0ksS0FBSyxFQUFFLENBQUM7SUFDWixDQUFDO0lBQ08sTUFBTSxDQUFDLE9BQXNCO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2RixDQUFDO0lBQ1ksTUFBTTs7Ozs7WUFDZixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sT0FBTSxNQUFNLFdBQUUsQ0FBQztZQUNwQyxNQUFNLFFBQVEsR0FBMEIsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUN0RSxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBdUIsRUFBRSxFQUFFO2dCQUN6QyxJQUFJLE9BQU8sQ0FBQyxJQUFJLEtBQUssd0JBQVcsQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLElBQUksS0FBSyx3QkFBVyxDQUFDLGNBQWMsRUFBRTtvQkFDbkYsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFlLEVBQUUsRUFBRTt3QkFDckMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLHdCQUFjLENBQUMsR0FBRyxPQUFPLENBQUMsSUFBSSxNQUFNLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFBO29CQUNoRyxDQUFDLENBQUMsQ0FBQztpQkFDTjtxQkFBTSxJQUFJLE9BQU8sQ0FBQyxJQUFJLEtBQUssd0JBQVcsQ0FBQyxTQUFTLEVBQUU7b0JBQy9DLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBZSxFQUFFLEVBQUU7d0JBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSx1QkFBYSxDQUFDLEdBQUcsT0FBTyxDQUFDLElBQUksTUFBTSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7b0JBQzdFLENBQUMsQ0FBQyxDQUFDO2lCQUNOO3FCQUFNLElBQUksT0FBTyxDQUFDLElBQUksS0FBSyx3QkFBVyxDQUFDLFlBQVksRUFBRTtvQkFDbEQsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFlLEVBQUUsRUFBRTt3QkFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFBO3dCQUM3QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksd0JBQWMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO29CQUM5RSxDQUFDLENBQUMsQ0FBQztpQkFDTjtZQUNMLENBQUMsQ0FBQyxDQUFBO1lBQ0YsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hCLENBQUM7S0FBQTtJQUNhLGdCQUFnQjs7WUFDMUIsTUFBTSxJQUFJLEdBQUcsTUFBTSxnQkFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ25DLE1BQU0sUUFBUSxHQUFRLE1BQU0sb0JBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNoRCxNQUFNLFdBQVcsR0FBUSxFQUFFLENBQUM7WUFDNUIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDdkIsT0FBTyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7Z0JBQ2xCLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDO1lBQ3RDLENBQUMsQ0FBQyxDQUFBO1lBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDZixHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRTtvQkFDdEIsTUFBTSxPQUFPLEdBQUcsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUNoQyxJQUFJLENBQUMsT0FBTzt3QkFBRSxPQUFPO29CQUNyQixPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDM0IsQ0FBQyxDQUFDLENBQUE7WUFDTixDQUFDLENBQUMsQ0FBQztZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEIsT0FBTyxRQUFRLENBQUM7UUFDcEIsQ0FBQztLQUFBO0NBQ0o7QUEvQ0QsOEJBK0NDIn0=