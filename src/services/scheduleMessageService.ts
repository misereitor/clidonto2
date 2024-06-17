import { Appointment } from '../model/receiveAppointment';
import sendMessageServices from './sendMessageServices';
import { scheduleJob } from 'node-schedule';

interface IScheduleMessageService {
  schedule(message: Appointment): void;
}

class scheduleMessageService implements IScheduleMessageService {
  schedule(message: Appointment): void {
    try {
      const date = new Date(message.date);
      scheduleJob(date, () => {
        sendMessageServices.send(message);
      });
    } catch (error) {
      throw new Error(String(error));
    }
  }
}

export default new scheduleMessageService();
