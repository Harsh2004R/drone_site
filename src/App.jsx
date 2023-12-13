import React from 'react'
import Nav from './Components/Nav'

import { ChakraProvider, CSSReset, extendTheme } from '@chakra-ui/react';
function App() {
  const theme = extendTheme({
    styles: {
      global: {
        body: {
          fontFamily: 'body',
        },
      },
    },
  });
  return (
    <>
      <ChakraProvider theme={theme}>
        <CSSReset />
        <Nav />

      </ChakraProvider>
    </>
  )
}

export default App
