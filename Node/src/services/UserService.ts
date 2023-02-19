export interface User {
  name: string
  email: string
}

const db = [
  {
    name: 'Hatus',
    email: 'dev.hatus@gmail.com',
  }
];

export class UserService {
  db: User[];

  constructor(database = db) {
    this.db = database;
  }

  createuser = (name: string, email: string) => {
    const user = {
      name,
      email,
    };
    this.db.push(user);
    console.log('DB Atualizado', this.db);
  };

  getAllUser = () => this.db;

  deleteUser = () => this.db
}
