import { BaseRequestHandler } from "./base_request_handler";
import { Request, Response, NextFunction, RequestHandler } from "express-serve-static-core";

export class SouthSignalRequestHandler extends BaseRequestHandler{

    protected requestHandler(req: Request, res: Response, next: NextFunction): void{
        res.write('Inside Request Handler of South Signal');
    }
}