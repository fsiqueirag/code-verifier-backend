/**
 * Root Router
 * Redirect to Routers
 */

import express, { Response, Request } from 'express';
import helloRouter from './HelloRouter';
import { LogInfo } from '../utils/logger';

// Server instance
const server = express();

// Router instance
const rootRouter = express.Router();

// Activate for requests to http://localhost:8080/api/

rootRouter.get('/', (req: Request, res: Response) => {
  LogInfo('GET: http://localhost:8080/api/');
  res.send('Welcome to API Restful: Express + TS + Nodemon + Jest + Swagger + Mongoose');
});

// Redirections to Routers & Controllers
server.use('/', rootRouter); // http://localhost:8080/api/
server.use('/hello', helloRouter); // http://localhost:8080/api/hello --> helloRouter
// Add more routes to the app

export default server;
