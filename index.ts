import dotenv from 'dotenv';
import server from './src/server';
import { LogSuccess, LogError } from './src/utils/logger';

// Configure dotenv
dotenv.config();

const port: string | number = process.env.PORT || 8000;

// Start the server
server.listen(port, () => {
  LogSuccess(`[SERVER ON]: Running in http://localhost:${port}/api`);
});

// Control SERVER ERROR
server.on('error', (error) => {
  LogError(`[SERVER ERROR]: ${error}`);
})
