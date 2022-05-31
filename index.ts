import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

// Configure dotenv
dotenv.config();

// Create the express app
const app: Express = express();
const port: string | number = process.env.PORT || 8000;

// Define the first route
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to API Restful: Express + TS + Nodemon + Jest + Swagger + Mongoose');
});

// Define the first route
app.get('/hello', (req: Request, res: Response) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`EXPRESS SERVER: Running at http://localhost:${port}`);
});
