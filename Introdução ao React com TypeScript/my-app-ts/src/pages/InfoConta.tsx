import { Box, Button, Center, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserData } from '../components/UserData';

const InfoConta = () => {
  const userData = useContext(UserData);

  return (
    <>
      <Center>
        <Box
          backgroundColor='white'
          minHeight='120px'
          padding={8}
          borderRadius='25px'>
          <Text fontSize='3x1' fontWeight='bold'>
            Informações da Conta
          </Text>
          <Text fontSize='3x1' fontWeight='bold'>
            Id:
          </Text>{' '}
          {userData.userData?.id}
          <Text fontSize='3x1' fontWeight='bold'>
            Nome:
          </Text>{' '}
          {userData.userData?.name}
          <Text fontSize='3x1' fontWeight='bold'>
            Email:
          </Text>{' '}
          {userData.userData?.email}
          <br />
                  <br />
                  <Center>
                      
          <Link to='/conta/1'>
            <Button fontSize='x1'>Acessar Conta</Button>
          </Link>
                  </Center>
        </Box>
      </Center>
    </>
  );
};

export default InfoConta;
