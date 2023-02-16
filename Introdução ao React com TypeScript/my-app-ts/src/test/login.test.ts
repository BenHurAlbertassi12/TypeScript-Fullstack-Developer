import { login } from "../services/login"

const mockAlert = jest.fn()
window.alert = mockAlert

describe('login', () => {
    test('Deve exibir um alert com boas vindas', () => {
        login()
        expect(mockAlert).toBeCalled();
    })
})