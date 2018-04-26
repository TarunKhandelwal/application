import {BaseController}  from './base_controller';
import { SouthVehicleRequestHandler } from '../handler/south_vehicle_handler';
import { NorthVehicleRequestHandler } from '../handler/north_vehicle_handler';
import { EastVehicleRequestHandler } from '../handler/east_vehicle_handler';
import { WestVehicleRequestHandler } from '../handler/west_vehicle_handler';

class VehicleController extends BaseController {

    constructor(){
        super();
    }

    protected configureRouter(){
        this.registerGetRoute('/south',new SouthVehicleRequestHandler().getHandler());
        this.registerGetRoute('/north',new NorthVehicleRequestHandler().getHandler());
        this.registerGetRoute('/east',new EastVehicleRequestHandler().getHandler());
        this.registerGetRoute('/west',new WestVehicleRequestHandler().getHandler());
    }
}

export var vehicleRouter = new VehicleController().getRouter();