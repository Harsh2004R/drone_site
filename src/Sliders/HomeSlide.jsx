//  I took help from "https://codesandbox.io/p/sandbox/chakra-ui-carousel-wgdp6?file=%2Fsrc%2FApp.js%3A6%2C29" to build this ImageSlider componet 


import { useBreakpointValue, Image, Text, Box } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import { FiShoppingCart,FiArrowRight } from 'react-icons/fi';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageSlider = ({ slides }) => {
  const imageStyle = {
    width: useBreakpointValue({ base: "100%", md: "100%" }),
    height: useBreakpointValue({ base: "75vh", md: "100vh", lg: "100vh" }),
    objectFit: "cover",
  };
  const textStyle1 = {
    position: "absolute",
    top: useBreakpointValue({ base: "10%", md: "10vh", lg: "10vh" }),
    left: "50%",
    transform: "translateX(-50%)",
    color: "#ededed",
    fontSize: useBreakpointValue({ base: "13px", md: "16px", lg: "16px" }),
    width: "100%"
  };
  const textStyle2 = {
    position: "absolute",
    top: useBreakpointValue({ base: "12.5%", md: "12.5vh", lg: "12.5vh" }),
    left: "50%",
    transform: "translateX(-50%)",
    color: "white",
    fontSize: useBreakpointValue({ base: "30px", md: "45px", lg: "45px" }),
    fontWeight: "400",
    width: "100%"
  };
  const textStyle3 = {
    position: "absolute",
    top: useBreakpointValue({ base: "20%", md: "21vh", lg: "21vh" }),
    left: "50%",
    transform: "translateX(-50%)",
    color: "white",
    fontSize: useBreakpointValue({ base: "18px", md: "24px", lg: "24px" }),
    width: "100%"
  };
  const linkBox1 = {
    width: useBreakpointValue({ base: "100px", md: "90px", lg: "130px" }),
    height: useBreakpointValue({ base: "35px", md: "90px", lg: "35px" }),
    position: "absolute",
    top: useBreakpointValue({ base: "25%", md: "30%", lg: "30%" }),
    left: useBreakpointValue({ base: "35%", md: "44%", lg: "44%" }),
    transform: "translateX(-50%)",
    color: "#ededed",
    border:"1px solid #fff",
    borderBottomRightRadius:"15px",
    borderTopRightRadius:"15px",
    borderBottomLeftRadius:"15px",
    borderTopLeftRadius:"15px",
    paddingLeft:"10px",
    paddingRight:"10px",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    fontSize:useBreakpointValue({ base: "12px", md: "", lg: "" }),


  }
  const linkBox2 = {
    width: useBreakpointValue({ base: "80px", md: "90px", lg: "130px" }),
    height: useBreakpointValue({ base: "35px", md: "90px", lg: "35px" }),
    position: "absolute",
    top: useBreakpointValue({ base: "25%", md: "30%", lg: "30%" }),
    left: "50%",
    transform: "translateX(+5%)",
    color: "#ededed",
    border:"1px solid #fff",
    borderBottomRightRadius:"15px",
    borderTopRightRadius:"15px",
    borderBottomLeftRadius:"15px",
    borderTopLeftRadius:"15px",
    paddingLeft:"10px",
    paddingRight:"10px",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    fontSize:useBreakpointValue({ base: "12px", md: "", lg: "" }),

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
               Learn more <FiArrowRight />
            </Box>
          )}
          {slide.link2 && (
            <Box style={linkBox2} textAlign="center">
             Buy now <FiShoppingCart />
            </Box>
          )}

        </Box>
      ))}
    </Carousel>
  );
};

export default ImageSlider;
