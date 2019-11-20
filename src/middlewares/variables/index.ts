import MTMVariable, { MTMVariableItem } from "../../models/MTMVariable";

const URL_BASE: string = "/variables";
const mtmVar = new MTMVariable();

export default (app) => {
    app.get(URL_BASE, async (req, res) => {
        res.json(await MTMVariable.getAll())
    });
    app.get(`${URL_BASE}/:id`, async (req, res) => {
      res.json(await mtmVar.get(req.params.id));
    });
    app.put(URL_BASE, async (req, res) => {
      res.json(await mtmVar.create(req.body));
    });
    app.post(`${URL_BASE}/:id`, async (req, res) => {
      const trigger: MTMVariableItem = req.body as MTMVariableItem;
      trigger.id = trigger.id || req.params.id || req.query.id;
      res.json(await mtmVar.update(trigger));
    });
    app.delete(`${URL_BASE}/:id`, async (req, res) => {
      const trigger: MTMVariableItem = req.body as MTMVariableItem;
      trigger.id = trigger.id || req.params.id || req.query.id;
      res.json(await mtmVar.delete(trigger));
    });
};
