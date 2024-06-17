import transport from '../config/nodemailer.config';
import { Appointment } from '../model/receiveAppointment';

interface ISendMessageService {
  send(message: Appointment): void;
}

class sendMessageService implements ISendMessageService {
  send(message: Appointment): void {
    transport.sendMail(
      {
        from: 'misaelbahia1@hotmail.com',
        to: message.email,
        subject: message.title,
        text: message.message
      },
      (error, info) => {
        if (error) {
          throw new Error(error.message);
        } else {
          console.log('email enviado' + info.response);
        }
      }
    );
  }
}

export default new sendMessageService();
