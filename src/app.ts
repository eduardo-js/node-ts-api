import express from 'express';
import {ErrorHandler} from './middleware/ErrorHandler';
import 'express-async-errors';
import Routes from './routes';

const app = express();
app.use(express.json());
app.use(Routes);
app.use(ErrorHandler);

export default app;
