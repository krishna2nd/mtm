import MTMDataStore from "./db/MTMDataStore";
import ModelQueryStatement from "./db/ModelQueryStatement";
export interface IVariableItem {
    id?: string | number;
    name: string;
    type: VariableType;
    body?: string;
    lastEdited: Date;
}
export declare enum VariableType {
    FUNCTION = "function",
    CUSTOM = "custom",
    DATA_LAYER = "data_layer",
    COOKIE = "cookie"
}
export interface IMTMVariableItem extends IVariableItem {
    get(id: string): Promise<IVariableItem>;
    create(variable: IVariableItem): Promise<IVariableItem>;
    delete(variable: IVariableItem): Promise<boolean>;
    update(variable: IVariableItem): Promise<IVariableItem>;
}
export declare class MTMVariableItem implements IMTMVariableItem {
    id?: string;
    name: string;
    type: VariableType;
    body: string;
    lastEdited: Date;
    static query: ModelQueryStatement;
    static store: MTMDataStore;
    private table;
    get(id: string | number): Promise<IVariableItem>;
    create(variable: IVariableItem): Promise<any>;
    delete(variable: IVariableItem): Promise<any>;
    update(variable: IVariableItem): Promise<IVariableItem>;
    static getAll(): Promise<Array<IVariableItem>>;
    constructor();
}
export default MTMVariableItem;
//# sourceMappingURL=MTMVariable.d.ts.map