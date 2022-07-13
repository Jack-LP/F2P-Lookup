import React from 'react';
import {
  IconButton,
  useColorMode,
  Heading,
  Container,
  Box,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg='blue.500'>
      <Container
        display='flex'
        maxW='60%'
        alignItems='center'
        justifyContent='space-between'
        py='4'
      >
        <Heading size='lg'>F2P Lookup</Heading>
        <IconButton
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
        />
      </Container>
    </Box>
  );
};

export default Navbar;
