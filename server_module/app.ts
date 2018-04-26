import * as express from "express";
import {signalRouter} from './src/main/routes/signal_controller';
import {vehicleRouter} from './src/main/routes/vehicle_controller';

export class Server{
    public app: express.Application;

    private constructor(){
        this.app =  express();
        this.setRoutes();
        console.log('app initialized');
    }

    private setRoutes(){
        this.app.use('/signal',signalRouter);
        this.app.use('/vehicle',vehicleRouter);
    }

    public static BootStrap(): Server {
        return new Server();
    }
}
module.exports.app = Server.BootStrap().app;
