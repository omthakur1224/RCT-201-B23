import React from 'react';
import {
    Flex,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Calculator from './components/Calculator';

function App() {
  return (
    <Flex gap={5}>
          <ColorModeSwitcher justifySelf="flex-end" />  
          <Calculator />
    </Flex>
  );
}

export default App;
