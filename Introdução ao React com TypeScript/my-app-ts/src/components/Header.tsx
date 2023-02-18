import { Text, Box, Button, Center, Spacer } from '@chakra-ui/react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { changeLocalStorage } from '../services/storage'
import { AppContext } from './AppContext'

export const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext)
  const navigate = useNavigate()

  const logout = () => {
    setIsLoggedIn(false)
    changeLocalStorage({email: "", password: ""})
    navigate('/')
  }

  return (
      <Center background='orange' padding='1px'>
          <Box>
          <Text fontSize='1xl'>Digital Inovation One - Bank</Text>
      </Box>
      {
        isLoggedIn && (
          <>
            <Spacer />
            <Button
              onClick={() => logout()}
              border='5px'
              margin='5px'
              padding='20px'
            >
              Sair
            </Button>
          </>
        )
      }
   
          </Center>
  )
}
