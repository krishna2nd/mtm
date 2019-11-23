
import MTMRenderer from "./middlewares/generate/renderer";
import fs from "fs";

const FILENAME: string = "./dist/public/mtm.js";
import "./models/db/MTMDataStore";
const mtmRenderer = new MTMRenderer();

(async () => {
    await mtmRenderer.render()
    fs.writeFile(FILENAME, 'utf8', (err) => {
        if (err) {
            return console.log(err);
        }
    });
})()
