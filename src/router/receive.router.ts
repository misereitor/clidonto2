import { Response, Request, Router } from 'express';
import scheduleMessageService from '../services/scheduleMessageService';
import { Appointment } from '../model/receiveAppointment';

const router = Router();

router.post('/', (req: Request, res: Response): void => {
  try {
    const user = req.body as Appointment;
    scheduleMessageService.schedule(user);
    res.status(200).send(user);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

export { router };
