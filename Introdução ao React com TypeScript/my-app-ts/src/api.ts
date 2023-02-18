const conta = {
  email: 'dev.benhur@gmail.com',
  password: '123',
  name: 'BenHur Albertassi',
  balance: 2000.0,
  id: '1',
};

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})