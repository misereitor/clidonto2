import { Response, Request, Router } from 'express';

const routerWebhook = Router();

routerWebhook.post('/webhook', (req: Request, res: Response): void => {
  console.log(req.body);

  res.status(200).send();
});

export { routerWebhook };
