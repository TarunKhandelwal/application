import {Router, Request, Response, RequestHandler} from 'express';
import {Thread} from 'tarun_utilities';
import { PathParams } from 'express-serve-static-core';

export abstract class BaseController{
    protected router: Router;

    constructor(){
        this.router = Router();
        this.configureRouter();
    }

    public getRouter(): Router{
        return this.router;
    }

    protected abstract configureRouter();
    
    protected registerGetRoute(url:PathParams, callback:RequestHandler){
        this.router.get(url, callback);
    }
}