import React from 'react'
import Nav from './Components/Nav'
import { ChakraProvider, CSSReset, extendTheme } from '@chakra-ui/react';
import ImageSlider from './Sliders/HomeSlide';
import { SlideData } from './Sliders/SlideData';
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
        <ImageSlider slides={SlideData} />

      </ChakraProvider>
    </>
  )
}

export default App
