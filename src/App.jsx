import React from 'react'
import { ChakraProvider, CSSReset, extendTheme } from '@chakra-ui/react';
import { BrowserRouter } from "react-router-dom";
import Home from './Pages/Home';
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
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <CSSReset />
          <Home />
        </ChakraProvider>
      </BrowserRouter>

    </>
  )
}

export default App
