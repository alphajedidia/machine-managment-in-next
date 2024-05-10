import bcrypt from 'bcrypt';

interface User {
  username: string;
  email: string;
  password: string;
}

const rootUser: User = {
  username: 'root',
  email: 'mihajasoaalain85@gmail.com',
  password: bcrypt.hashSync('root', 10),
};

export default rootUser;