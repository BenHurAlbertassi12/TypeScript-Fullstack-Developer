import { Request, Response } from 'express';
import { UserService } from '../services/UserService';

export class UserController {
  userService: UserService;
  constructor(userService = new UserService()) {
    this.userService = userService;
  }

  createUser = (req: Request, res: Response) => {
    const user = req.body;

    if (!user.name) {
      return res.status(400).json({ message: 'Bad Request: name invalid' });
    }

    this.userService.createuser(user.name, user.email);
    return res.status(201).json({ message: 'Usuário Criado' });
  };

  getAllUser = (req: Request, res: Response) => {
    const users = this.userService.getAllUser();
    return res.status(200).json(users);
  };

  deleteUser = (req: Request, res: Response) => {
    const user = req.body;
    this.userService.deleteUser();
    console.log('Deletando usuário...', user);
    return res.status(200).json({ message: 'Usuário deletado' });
  };
}
