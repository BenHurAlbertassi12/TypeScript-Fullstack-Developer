const db = [
  {
    name: 'Hatus',
    email: 'dev.hatus@gmail.com',
  },
];

export class UserService {
  createuser = (name: string, email: string) => {
    const user = {
      name,
      email,
    };
    db.push(user);
    console.log('DB Atualizado', db);
  };
  getAllUser = () => db;
}
