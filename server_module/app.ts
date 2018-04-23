import * as express from "express";
import {controller} from "./src/main/routes/public_controller";

class Server{
    public app: express.Application;

    private constructor(){
        this.app =  express();

        this.app.use('/welcome',controller);

        console.log('app initialized');
    }

    public static BootStrap(): Server {
        return new Server();
    }
}
export var app = Server.BootStrap().app;
