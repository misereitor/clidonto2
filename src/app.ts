import express, { Application } from 'express';
import { router as useRouter } from './router/receive.router';
import cors from 'cors';

const app: Application = express();
app.use(cors());
app.use(express.json());
//app.use('/send', useRouter);
app.use('/receive', useRouter);

export default app;
