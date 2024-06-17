import express, { Application } from 'express';
import { router as useRouter } from './router/receive.router';

const app: Application = express();

app.use(express.json());
//app.use('/send', useRouter);
app.use('/receive', useRouter);

export default app;
