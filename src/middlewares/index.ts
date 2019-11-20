import TagsMiddleWare from "./tags";
import TrggerMiddleware from "./triggers";
import GenerateScript from "./generate";

export default (app) => {
    TagsMiddleWare(app);
    TrggerMiddleware(app);
    GenerateScript(app);
};
