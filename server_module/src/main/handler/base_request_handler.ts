import { Request, Response, RequestHandler, NextFunction } from "express-serve-static-core";

export abstract class BaseRequestHandler {

    public getHandler(): RequestHandler{
        return this.baseRequestHandler;
    }

    public baseRequestHandler = (req: Request, res: Response, next: NextFunction): void => {
        this.requestHandler(req, res, next);
        res.end();
    }

    protected abstract requestHandler(req: Request, res:Response, next:NextFunction): void;
}