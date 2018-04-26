import {BaseController}  from './base_controller';
import { SouthSignalRequestHandler } from '../handler/south_signal_handler';
import { NorthSignalRequestHandler } from '../handler/north_signal_handler';
import { EastSignalRequestHandler } from '../handler/east_signal_handler';
import { WestSignalRequestHandler } from '../handler/west_signal_handler';

class SignalController extends BaseController {

    constructor(){
        super();
    }

    protected configureRouter(){
        this.registerGetRoute('/south',new SouthSignalRequestHandler().getHandler());
        this.registerGetRoute('/north',new NorthSignalRequestHandler().getHandler());
        this.registerGetRoute('/east',new EastSignalRequestHandler().getHandler());
        this.registerGetRoute('/west',new WestSignalRequestHandler().getHandler());
    }
}

export var signalRouter = new SignalController().getRouter();