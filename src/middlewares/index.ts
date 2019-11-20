import TagsMiddleWare from "./tags";
import TrggerMiddleware from "./triggers";
import VariableMiddleware from "./variables";
import GenerateScript from "./generate";

export default (app) => {
    TagsMiddleWare(app);
    TrggerMiddleware(app);
    VariableMiddleware(app);
    GenerateScript(app);
};
