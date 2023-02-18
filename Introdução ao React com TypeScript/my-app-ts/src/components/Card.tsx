import { Box, Center } from '@chakra-ui/react';

export const Card = ({ children }: any) => {
  return (
    <Center>
      <Box
        backgroundColor='#FFFFFF'
        borderRadius='25px'
        padding='20px'
        width='50vh'>
        {children}
      </Box>
    </Center>
  );
};
