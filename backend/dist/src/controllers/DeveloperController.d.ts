import { Request, Response } from 'express';
declare class DeveloperController {
    index(request: Request, response: Response): Promise<Response>;
    create(request: Request, response: Response): Promise<Response<any, Record<string, any>>>;
    getById(request: Request, response: Response): Promise<Response<any, Record<string, any>>>;
    update(request: Request, response: Response): Promise<Response<any, Record<string, any>>>;
    delete(request: Request, response: Response): Promise<Response<any, Record<string, any>>>;
}
export { DeveloperController };
