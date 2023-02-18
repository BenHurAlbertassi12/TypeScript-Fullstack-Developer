import { Button } from '@chakra-ui/react';

interface IDButton {
  onClick: () => {};
}

export const DButton = ({ onClick }: IDButton) => {
  return (
    <Button colorScheme='teal' size='sm' width='50%'>
      Entrar
    </Button>
  );
};
