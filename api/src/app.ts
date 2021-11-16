import express, { ErrorRequestHandler } from 'express';
import { RegisterRoutes } from '../../generated/routes';
import cors from 'cors';

const api = express();

api.use(cors());

// POST Body をJSONパース
api.use(express.json());

api.use('/test', (req, res, next) => {
  res.json({ message: 'test ok' });
  next();
});

RegisterRoutes(api);

// エラーハンドリング
const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  return res.status(500).json({ message: 'エラーしました。' });
};
api.use(errorHandler);

api.listen(8080);
console.log('start server: port = 8080');
