// import { Center } from './components/Center';
import {
  ChakraProvider,
  Input,
  Box,
  Center,
  Button
} from '@chakra-ui/react'
import { login } from './services/login';


function App() {
  return (
    <ChakraProvider>
      <Center
        backgroundColor='Orange'
      >
      <Box
        minHeight='100vh'
        backgroundColor='Orange'
        padding='25px'
      >
        <Box
          backgroundColor='#FFFFFF'
          borderRadius='25px'
          padding='15px'
          maxWidth='50vh'
        >
          <Center>
        <h1>Login</h1>
          </Center>
          <Input
            placeholder='E-mail'
            type='email'
          />
          <Input
          placeholder='password'
          type='password'
          marginTop='10px'
          marginBottom='10px'
          
          />
          <br/>
          <Button
            colorScheme='teal'
            size='sm'
            width='100%'
            onClick={login}
            
          >
            Entrar
          </Button>
        </Box>
        </Box>
        </Center>
</ChakraProvider>
  )
}

export default App;
