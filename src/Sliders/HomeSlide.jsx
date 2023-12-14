//  I took help from "https://codesandbox.io/p/sandbox/chakra-ui-carousel-wgdp6?file=%2Fsrc%2FApp.js%3A6%2C29" to build this ImageSlider componet 


import { useBreakpointValue, Image, Text, Box } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageSlider = ({ slides }) => {
  const imageStyle = {
    width: useBreakpointValue({ base: "100%", md: "100%" }),
    height: useBreakpointValue({ base: "75vh", md: "100vh", lg: "100vh" }),
    objectFit: "cover",
  };
  const textStyle1 = {
    position: "absolute",
    top: useBreakpointValue({ base: "10vh", md: "10vh", lg: "10vh" }),
    left: "50%",
    transform: "translateX(-50%)",
    color: "#ededed",
    fontSize: useBreakpointValue({ base: "12px", md: "16px", lg: "16px" }),
    width: "100%"
  };
  const textStyle2 = {
    position: "absolute",
    top: useBreakpointValue({ base: "14vh", md: "12.5vh", lg: "12.5vh" }),
    left: "50%",
    transform: "translateX(-50%)",
    color: "white",
    fontSize: useBreakpointValue({ base: "30px", md: "45px", lg: "45px" }),
    fontWeight: "400",
    width: "100%"
  };
  const textStyle3 = {
    position: "absolute",
    top: useBreakpointValue({ base: "21vh", md: "21vh", lg: "21vh" }),
    left: "50%",
    transform: "translateX(-50%)",
    color: "white",
    fontSize: useBreakpointValue({ base: "18px", md: "24px", lg: "24px" }),
    width: "100%"
  };
  const linkBox1 = {



  }
  const linkBox2 = {



  }

  return (
    <Carousel infiniteLoop showThumbs={false}>
      {slides.map((slide, index) => (
        <Box key={index} position="relative">
          <Image style={imageStyle} w="100%" h="100vh" src={slide.image} />
          {slide.text1 && (
            <Text style={textStyle1} textAlign="center">
              {slide.text1}
            </Text>
          )}
          {slide.text2 && (
            <Text style={textStyle2} textAlign="center">
              {slide.text2}
            </Text>
          )}
          {slide.text3 && (
            <Text style={textStyle3} textAlign="center">
              {slide.text3}
            </Text>
          )}
          {slide.link1 && (
            <Box style={linkBox1} textAlign="center">
              {slide.text3}
            </Box>
          )}
          {slide.link2 && (
            <Box style={linkBox2} textAlign="center">
              {slide.text3}
            </Box>
          )}

        </Box>
      ))}
    </Carousel>
  );
};

export default ImageSlider;
