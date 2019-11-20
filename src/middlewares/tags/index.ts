import MTMTag, { MTMTagItem } from "../../models/MTMTag";

const URL_BASE: string = "/tags";
const mtmTag = new MTMTag();

export default (app) => {
  app.get(URL_BASE, async (req, res) => {
    const result = await MTMTag.getAll();
    console.log(result)
    res.json(result)
  });
  app.get(`${URL_BASE}/:id`, async (req, res) => {
    res.json(await mtmTag.get(req.query.id));
  });
  app.put(URL_BASE, async (req, res) => {
    res.json(await mtmTag.create(req.body));
  });
  app.post(`${URL_BASE}/:id`, async (req, res) => {
    const tag: MTMTagItem = req.body as MTMTagItem;
    tag.id = tag.id || req.query.id;
    res.json(await mtmTag.update(tag));
  });
};
