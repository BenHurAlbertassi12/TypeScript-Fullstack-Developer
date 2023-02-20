import { sign } from 'jsonwebtoken';
import { AppDataSource } from '../database';
import { User } from '../entities/User';
import { UserRepository } from '../repositories/UserRepository';

export class UserService {
  private userRepository: UserRepository;

  constructor(userRepository = new UserRepository(AppDataSource.manager)) {
    this.userRepository = userRepository;
  }

  createUser = async (
    name: string,
    email: string,
    password: string
  ): Promise<User> => {
    const user = new User(name, email, password);
    return this.userRepository.createUser(user);
  };

  getUser = async (userId: string): Promise<User | null> => {

    return this.userRepository.getUser(userId)
   };
  

  getAuthenticateUser = async (
    email: string,
    password: string
  ): Promise<User | null> => { 
    return this.userRepository.getUserByEmailAndPassword(email, password)
  };
  getToken = async (
    email: string,
    password: string
  ): Promise<string> => {
    const user = await this.getAuthenticateUser(email, password)

    if (!user) {
      throw new Error('Email ou senha invalida')
    }

    const tokenData = {
      name: user?.name,
      email:user?.email
    }
    const tokenKey = '123456789'

    const tokenOption = {
      subject: user?.user_id
    }
    const token = sign(tokenData, tokenKey, tokenOption);
    return token

    // return user?.user_id
  }
}
