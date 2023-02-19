import { UserService } from '../services/UserService';
import { UserController } from './UserController';

import { makeMockRequest } from '../__mocks__/mockRequest.mock';
import { makeMockResponse } from '../__mocks__/mockRespost.mock';

import { Request } from 'express';

describe('userController', () => {
  const mockUserService: Partial<UserService> = {
    createuser: jest.fn(),
  };

  const userController = new UserController(mockUserService as UserService);

  it('Deve adicionar um novo usuário', () => {
    const mockRequest = {
      body: {
        name: 'Ben',
        email: 'dev.benhur@gmail.com',
      },
    } as Request;
    const mockResponse = makeMockResponse();
      userController.createUser(mockRequest, mockResponse);
      expect(mockResponse.state.status).toBe(201)
      expect(mockResponse.state.json).toMatchObject({message: 'Usuário Criado'})
  });
});
