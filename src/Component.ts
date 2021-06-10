import UIComponent from "sap/ui/core/UIComponent";
// import { support } from "sap/ui/Device";
import models from "./model/models";

/**
 * @namespace be.wl.example
 */
export default class Component extends UIComponent{
    private static metadata = {
        manifest:"json"
    }
    
    public init() : void{
        super.init();

        this.getRouter().initialize();
        this.setModel(models.createDeviceModel(),"device");
    }
}
