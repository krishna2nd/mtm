
import MTMRenderer from "./renderer";

const URL_BASE: string = "/script";

export default (app) => {
    app.get(URL_BASE, (req, res) => {
        const mtmRenderer = new MTMRenderer();
        res.type('application/javascript; charset=UTF-8').send(
            mtmRenderer.render()
        )
    });
};
