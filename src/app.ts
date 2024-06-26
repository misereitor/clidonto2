import express, { Application } from 'express';
import { router as useRouter } from './router/receive.router';
import cors from 'cors';
import { routerWebhook } from './router/webhook';

const app: Application = express();
app.use(cors());
app.use(express.json());
app.use('/send', useRouter);
app.use('/receive', useRouter);
app.use('/api', routerWebhook);

export default app;
