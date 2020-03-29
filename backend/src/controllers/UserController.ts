import { Request, Response } from "express";
import { EmailService } from "./../services/EmailService";

const users = [
  {
    name: "Max",
    email: "maxzanelato@gmail.com"
  }
];

export default {
  async findAll(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();
    emailService.sendEmail(
      { name: "Max", email: "maxzanelato@com.com" },
      { subject: "Bem-vindo ao sistema", body: "Seja bem-vindo!" }
    );

    return res.send();
  }
};
