import { Center, Input } from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../components/AppContext';
import { Card } from '../components/Card';
import NButton from '../components/NButton';
import { login } from '../services/login';
import { changeLocalStorage } from '../services/storage';

const Home = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const validateUser = async (email: string, password: string) => {
    const loggedIn = await login(email, password);

    if (!loggedIn) {
      return alert('Email ou senha incorreta!');
    }

    setIsLoggedIn(true);
    changeLocalStorage({ email: email, password: password });
    navigate('/infoconta');
  };

  return (
    <Card>
      <Center marginBottom='15px'>
        <h1>Faça o login</h1>
      </Center>

      <Center>
        <Input
          placeholder='email'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          width='50vh'
          marginBottom='10px'
        />
      </Center>
      <Center>
        <Input
          width='50vh'
          placeholder='password'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          marginBottom='10px'
        />
      </Center>
      <Center>
        <NButton onClick={() => validateUser(email, password)} />
      </Center>
    </Card>
  );
};

export default Home;
