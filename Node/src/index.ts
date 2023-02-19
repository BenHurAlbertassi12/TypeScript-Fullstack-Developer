import 'reflect-metadata';
import express, { Request, Response } from 'express';
import { router } from './Routes';
import { AppDataSource } from './database';

const server = express();

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });

server.use(express.json());
server.use(router);

server.get('/', (req: Request, res: Response) => {
  return res.status(200).json({ message: 'DioBank API' });
});

server.listen(5000, () => console.log('Server On'));
