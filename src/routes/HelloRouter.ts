import express, { Request, Response } from 'express';
import { HelloController } from '../controller/HelloController';
import { LogInfo } from '../utils/logger';
import { BasicResponse } from '@/controller/types';

// Router from express
const helloRouter = express.Router();

// http://localhost:8080/api/hello?name=Fabrizio/
helloRouter.route('/')
  // GET:
  .get(async (req: Request, res: Response) => {
    // Obtain a query param
    const name: any = req?.query?.name;
    LogInfo(`Query param: ${name}`);
    // Controller instance to execute method
    const controller: HelloController = new HelloController();
    // Obtain response from controller
    const response: BasicResponse = await controller.getMessage(name);
    // Send response to client
    return res.send(response);
  });

// Export HelloRouter
export default helloRouter;
