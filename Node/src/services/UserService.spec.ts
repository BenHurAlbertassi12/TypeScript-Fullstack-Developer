import { UserService, User } from "./UserService"

describe('UserService', () => {
    const mockDb: User[] = []
    const userService = new UserService(mockDb);
    it('deve adcionar um novo usuário', () => {
        const mockConsole = jest.spyOn(global.console, 'log')
        userService.createuser('Ben', 'dev.benhur@test.com')
        expect(mockConsole).toHaveBeenCalledWith('DB Atualizado', mockDb)
    })
})