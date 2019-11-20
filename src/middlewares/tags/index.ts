import MTMTag, { MTMTagItem } from "../../models/MTMTag";

const URL_BASE: string = "/tags";
const mtmTag = new MTMTag();

export default (app) => {
    app.get(URL_BASE, (req, res) => {
        res.json(MTMTag.getAll())
    });
    app.get(`${URL_BASE}/:id`, (req, res) => {
      res.json(mtmTag.get(req.query.id));
    });
    app.put(URL_BASE, (req, res) => {
      res.json(mtmTag.create(req.body));
    });
    app.post(`${URL_BASE}/:id`, (req, res) => {
      const tag: MTMTagItem = req.body as MTMTagItem;
      tag.id = tag.id || req.query.id;
      res.json(mtmTag.create(req.body));
    });
};
