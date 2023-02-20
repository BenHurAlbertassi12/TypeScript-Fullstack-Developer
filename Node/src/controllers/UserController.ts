import { Request, Response } from 'express';
import { UserService } from '../services/UserService';

export class UserController {
  userService: UserService;

  constructor(userService = new UserService()) {
    this.userService = userService;
  }

  createUser = (req: Request, res: Response) => {
    const user = req.body;

    if (!user.name || !user.email) {
      return res.status(400).json({ message: 'Bad Request: name invalid' });
    }

    this.userService.createUser(user.name, user.email, user.password);
    return res.status(201).json({ message: 'Usuário Criado' });
  };

  getUser = async (req: Request, res: Response) => {
    const { userId } = req.params
    const user = await this.userService.getUser(userId)
    return res.status(200).json({
      userId: user?.user_id,
      name: user?.name,
      email:user?.email
    })
  };

  deleteUser = (req: Request, res: Response) => {
    const user = req.body;
    console.log('Deletando usuário...', user);
    return res.status(200).json({ message: 'Usuário deletado' });
  };
}
