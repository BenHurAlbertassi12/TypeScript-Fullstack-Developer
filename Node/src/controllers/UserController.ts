import { Request, Response } from 'express';
import { UserService } from '../services/UserService';

export class UserController {
  createUser = (req: Request, res: Response) => {
    const userService = new UserService();
    const user = req.body;

    if (!user.name)
      res.status(400).json({ message: 'Bad Request: name invalid' });

    userService.createuser(user.name, user.email);
    return res.status(201).json({ message: 'Usuário Criado' });
  };
  getAllUser = (req: Request, res: Response) => {
    const userService = new UserService();
    const users = userService.getAllUser;
    return res.status(200).json(users);
  };

  deleteUser = (req: Request, res: Response) => {
    const user = req.body;
    console.log('Delentado usuário...', user);
    return res.status(200).json({message: 'Usuário deletado'})
    
  }
}
