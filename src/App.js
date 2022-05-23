import React from 'react';
import {Box} from '@chakra-ui/react';
import Hero from './components/Hero';

function App () {
  return (
    <Box
      h={{base: 'auto', lg: '100vh'}}
      overflow="hidden"
      bgColor="#0D010F"
      color="whiteAlpha.900"
      fontFamily="'Inter', sans-serif"
      py="7"
      px="10"
    >
      <Hero />
    </Box>
  );
}

export default App;
