import React from 'react'
import { ChakraProvider, CSSReset, extendTheme } from '@chakra-ui/react';
import { BrowserRouter } from "react-router-dom";
import AllRoutes from './Routes/AllRoutes';
function App() {
  
  return (
    <>
      <BrowserRouter>
        
          <CSSReset />
          <AllRoutes/>
        
      </BrowserRouter>

    </>
  )
}

export default App
