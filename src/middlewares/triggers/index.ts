import MTMTrigger, { MTMTriggerItem } from "../../models/MTMTrigger";

const URL_BASE: string = "/triggers";
const mtmTrigger = new MTMTrigger();

export default (app) => {
    app.get(URL_BASE, (req, res) => {
        res.json(MTMTrigger.getAll())
    });
    app.get(`${URL_BASE}/:id`, (req, res) => {
      res.json(mtmTrigger.get(req.query.id));
    });
    app.put(URL_BASE, (req, res) => {
      res.json(mtmTrigger.create(req.body));
    });
    app.post(`${URL_BASE}/:id`, (req, res) => {
      const trigger: MTMTriggerItem = req.body as MTMTriggerItem;
      trigger.id = trigger.id || req.query.id;
      res.json(mtmTrigger.create(req.body));
    });
};
