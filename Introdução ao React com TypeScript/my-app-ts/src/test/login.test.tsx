import { login } from "../services/login"

describe('login', () => {

    const mockEmail = 'dev.benhur@gmail.com'
    const mockPassword = '123'

    it('Deve retornar true caso o email e a senha sejam válidos', async () => {
        const response = await login(mockEmail, mockPassword)
        expect(response).toBeTruthy()
    })

    it('Deve retornar falso caso o email ou a senha sejam inválidos', async () => {
        const senha = await login(mockEmail,'456')
        expect(senha).toBeFalsy()
        const email = await login('invalid@teste.com',mockPassword)
        expect(email).toBeFalsy()
        const emailSenha = await login('invalid@teste.com','456')
        expect(emailSenha).toBeFalsy()
    })
})