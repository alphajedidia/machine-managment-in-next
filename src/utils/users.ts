import bcrypt from 'bcrypt';

interface User {
  username: string;
  email: string;
  password: string;
}

const rootUser: User = {
  username: 'root',
  email: 'mihajasoaalain85@gmail.com',
  password: bcrypt.hashSync('root', 10), // Mot de passe hashé pour 'rootpassword'
};

export default rootUser;