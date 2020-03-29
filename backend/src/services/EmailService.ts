interface IMailTo {
  name: string;
  email: string;
}

interface IMailMessage {
  subject: string;
  body: string;
  attachment?: Array<string>;
}

export class EmailService {
  sendEmail(to: IMailTo, message: IMailMessage) {
    console.log(`E-mail enviado para ${to.name}: ${message.subject}`);
  }
}
