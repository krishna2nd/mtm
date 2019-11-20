import MTMTrigger, { MTMTriggerItem } from "../../models/MTMTrigger";

const URL_BASE: string = "/triggers";
const mtmTrigger = new MTMTrigger();

export default (app) => {
    app.get(URL_BASE, async (req, res) => {
        res.json(await MTMTrigger.getAll())
    });
    app.get(`${URL_BASE}/:id`, async (req, res) => {
      res.json(await mtmTrigger.get(req.query.id));
    });
    app.put(URL_BASE, async (req, res) => {
      res.json(await mtmTrigger.create(req.body));
    });
    app.post(`${URL_BASE}/:id`, async (req, res) => {
      const trigger: MTMTriggerItem = req.body as MTMTriggerItem;
      trigger.id = trigger.id || req.query.id;
      res.json(await mtmTrigger.update(trigger));
    });
};

