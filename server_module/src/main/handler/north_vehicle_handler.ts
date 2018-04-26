import { BaseRequestHandler } from "./base_request_handler";
import { Request, Response, NextFunction } from "express-serve-static-core";
import { RequestHandler } from "express";

export class NorthVehicleRequestHandler extends BaseRequestHandler{

    protected requestHandler(req: Request, res: Response, next: NextFunction): void{
        res.write('Inside Request Handler of North Vehicle');
    }
}