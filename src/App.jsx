import React from 'react'
import Nav from './Components/Nav'
import { ChakraProvider, CSSReset, extendTheme } from '@chakra-ui/react';
import ImageSlider from './Sliders/HomeSlide';
import { SlideData } from './Sliders/SlideData';
import FourImg from './HomeComponents/FourImg';
import VideoSlider from './HomeComponents/VideoSlider';
import DJI_Products from './HomeComponents/DJI_Products';
import Footer from './Components/Footer';
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
        <FourImg/>
        <VideoSlider/>
        <DJI_Products/>
        <Footer/>

      </ChakraProvider>
    </>
  )
}

export default App
