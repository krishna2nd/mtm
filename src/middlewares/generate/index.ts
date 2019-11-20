
import MTMRenderer from "./renderer";

const URL_BASE: string = "/mtm.js";

export default (app) => {
    app.get(URL_BASE, async (req, res) => {
        const mtmRenderer = new MTMRenderer();
        res.type('application/javascript; charset=UTF-8').send(
            await mtmRenderer.render()
        )
    });
};
