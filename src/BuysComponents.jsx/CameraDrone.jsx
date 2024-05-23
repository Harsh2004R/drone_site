import React, { useState } from 'react';
import { Text, Box, Divider, useBreakpointValue, Image, Grid, GridItem } from "@chakra-ui/react";
import Navbar from '../Components/Navbar.jsx';
import Footer from "../Components/Footer.jsx"
import FourImg from "../HomeComponents/FourImg.jsx"
function CameraDrone() {
  // Array of images
  const images = [
    { img_url: "https://dji-official-fe.djicdn.com/dps/3b7953435e791d6a56253d87584e34cf.png", pro_name: "Dji Mavic" },
    { img_url: "https://dji-official-fe.djicdn.com/dps/77738ff32f7a228fc58b4f401261e481.png", pro_name: "Dji Air" },
    { img_url: "https://dji-official-fe.djicdn.com/dps/97e1b5ab20211e739898969647666de1.png", pro_name: "Dji Mini" },
    { img_url: "https://dji-official-fe.djicdn.com/dps/d13ba498aecd93533f69bcd1500458af.png", pro_name: "" },

    { img_url: "https://dji-official-fe.djicdn.com/dps/445acaa272ac55184d736f9518c50b3c.png", pro_name: "" },
    { img_url: "https://dji-official-fe.djicdn.com/dps/b429552c65fa90e612204031c752b2e0.png", pro_name: "" },
    { img_url: "https://dji-official-fe.djicdn.com/dps/f14c7c1d91574014937b8f52e8226e1a.png", pro_name: "" },
    { img_url: "https://dji-official-fe.djicdn.com/dps/ab660f7a8c5a5ab1b776f800c8cbc6ee.svg", pro_name: "" },


  ];
  const textStyle1 = {
    width: useBreakpointValue({ base: "80px", md: "90px", lg: "130px" }),
    height: useBreakpointValue({ base: "35px", md: "90px", lg: "35px" }),
    position: "absolute",
    top: useBreakpointValue({ base: "50%", md: "65%", lg: "70%" }),
    left: "50%",
    transform: "translateX(+5%)",
    color: "#ededed",
    border: "1px solid #fff",
    borderBottomRightRadius: "15px",
    borderTopRightRadius: "15px",
    borderBottomLeftRadius: "15px",
    borderTopLeftRadius: "15px",
    paddingLeft: "10px",
    paddingRight: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: useBreakpointValue({ base: "12px", md: "", lg: "" }),

  }
  const textStyle2 = {
    width: useBreakpointValue({ base: "80px", md: "90px", lg: "130px" }),
    height: useBreakpointValue({ base: "35px", md: "90px", lg: "35px" }),
    position: "absolute",
    top: useBreakpointValue({ base: "50%", md: "65%", lg: "70%" }),
    left: "50%",
    transform: "translateX(+5%)",
    color: "#ededed",
    border: "1px solid #fff",
    borderBottomRightRadius: "15px",
    borderTopRightRadius: "15px",
    borderBottomLeftRadius: "15px",
    borderTopLeftRadius: "15px",
    paddingLeft: "10px",
    paddingRight: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: useBreakpointValue({ base: "12px", md: "", lg: "" }),

  }

  return (
    <>
      <Navbar />



      <Box w="100%" h="100vh" bg="#fff">
        <Box w="100%" h={{ base: "21.5vh", md: "20vh" }} bg="#eee">

          <Box w={{ base: "100%", md: "80%" }} m="auto" h="100%" bg="#" style={{ overflow: "hidden" }}>
            {/* Render images based on currentIndex */}
            <Grid templateColumns={{ base: 'repeat(4, 1fr)', md: 'repeat(8, 1fr)' }} gap={1}>
              <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignContent={"center"} w='100%' h={{ base: "10vh", md: "95%" }}   >
                <Image m="auto" src="https://dji-official-fe.djicdn.com/dps/3b7953435e791d6a56253d87584e34cf.png" w="80%" h="80%" alt="mini_drones" />
                <Text fontSize={{ base: "xs", md: "sm" }} textAlign={"center"}>Dji Mavic</Text>
              </Box>
              <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignContent={"center"} w='100%' h={{ base: "10vh", md: "95%" }}   >
                <Image m="auto" src="https://dji-official-fe.djicdn.com/dps/77738ff32f7a228fc58b4f401261e481.png" w="80%" h="80%" alt="mini_drones" />
                <Text fontSize={{ base: "xs", md: "sm" }} textAlign={"center"}>Dji Air</Text>
              </Box>
              <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignContent={"center"} w='100%' h={{ base: "10vh", md: "95%" }}   >
                <Image m="auto" src="https://dji-official-fe.djicdn.com/dps/5698cb42a9a1fdce69e22f30550d9767.png" w="80%" h="80%" alt="mini_drones" />
                <Text fontSize={{ base: "xs", md: "sm" }} textAlign={"center"}>Dji Mini</Text>
              </Box>
              <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignContent={"center"} w='100%' h={{ base: "10vh", md: "95%" }}   >
                <Image m="auto" src="https://dji-official-fe.djicdn.com/dps/97e1b5ab20211e739898969647666de1.png" w="80%" h="80%" alt="mini_drones" />
                <Text fontSize={{ base: "xs", md: "sm" }} textAlign={"center"}>Dji Avata2</Text>
              </Box>
              <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignContent={"center"} w='100%' h={{ base: "10vh", md: "95%" }}   >
                <Image m="auto" src="https://dji-official-fe.djicdn.com/dps/d13ba498aecd93533f69bcd1500458af.png" w="80%" h="80%" alt="mini_drones" />
                <Text fontSize={{ base: "xs", md: "sm" }} textAlign={"center"}>Dji Inspire2</Text>
              </Box>
              <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignContent={"center"} w='100%' h={{ base: "10vh", md: "95%" }}   >
                <Image m="auto" src="https://dji-official-fe.djicdn.com/dps/445acaa272ac55184d736f9518c50b3c.png" w="80%" h="80%" alt="mini_drones" />
                <Text fontSize={{ base: "xs", md: "sm" }} textAlign={"center"}>Dji FPV</Text>
              </Box>
              <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignContent={"center"} w='100%' h={{ base: "10vh", md: "95%" }}   >
                <Image m="auto" src="https://dji-official-fe.djicdn.com/dps/b429552c65fa90e612204031c752b2e0.png" w="80%" h="80%" alt="mini_drones" />
                <Text fontSize={{ base: "xs", md: "sm" }} textAlign={"center"}>RC</Text>
              </Box>
              <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignContent={"center"} w='100%' h={{ base: "10vh", md: "95%" }}   >
                <Image m="auto" src="https://dji-official-fe.djicdn.com/dps/f14c7c1d91574014937b8f52e8226e1a.png" w="80%" h="80%" alt="mini_drones" />
                <Text fontSize={{ base: "xs", md: "sm" }} textAlign={"center"}>Dji Power</Text>
              </Box>

            </Grid>

          </Box>

        </Box>

        {/* camera drones heading box starting here-------------->>>>>>>>>> */}
        <Box w={"100%"} h={{ base: "15vh", md: "35vh" }} justifyContent={"center"} display={"flex"} alignContent={"center"} alignItems={"center"}>
          <Box w='80%' h='auto'  >
            <Text textAlign={"center"} fontSize={{ base: "2xl", md: "5xl" }} fontWeight={"500"}>
              Camera Drones
            </Text>
            <Text fontSize={{ base: "12px", md: "16px" }} textColor={"#998"} textAlign={"center"}>Capture your moments from above with</Text>
            <Text fontSize={{ base: "12px", md: "16px" }} textColor={"#998"} textAlign={"center"}>a mini drone, FPV, or professional aerial camera.</Text>
          </Box>


        </Box>
        {/* camera drones heading box ends here-------------->>>>>>>>>> */}

        {/* Dji Avata 2 hero part starting from here------------->>>>>>>>>>>> */}
        <Box className="hero_wrapper" w='100%' h={{ base: "80vh", md: "85vh" }} display={"flex"} justifyContent={"center"} alignContent={"center"} alignItems={"center"}
        >
          <Box
            position={"relative"}
            w="96%" h={{ base: "100%", md: "100%" }}
            bgImage="url('https://dji-official-fe.djicdn.com/dps/a0078af5ca32445787d0f0ba5fdf10af@origin.jpg')"
            bgSize="cover" objectFit="cover"
            bgPosition="center" alt="Zoomable Image"
            bgRepeat="no-repeat"
          >
            <Box position="absolute"
              top={{ base: "15%", md: "10%" }}
              left={0}
              //  border={"1px solid red"}
              width="100%"
              height={{ base: "25vh", md: "30vh" }}
              cursor={"pointer"}>

              <Text textAlign={"center"} textColor={"#fff"} fontWeight={"400"} fontSize={{ base: "40px", md: "45px" }}>DJI AVATA 2</Text>
              <Text textAlign={"center"} textColor={"#eee"} fontWeight={"400"} fontSize={{ base: "12px", md: "16px" }}>All Thrills, No Frills</Text>
              <Text textAlign={"center"}> <span style={{ color: "#fff", textDecoration: "underline", fontSize: "12px", textAlign: "center" }}>Learn More</span> <span style={{ color: "#fff", textDecoration: "underline", fontSize: "12px", textAlign: "center" }}>Where to Buy</span></Text>
            </Box>

          </Box>

        </Box>


        {/* four image component importing here...._____>>>>> */}

        <FourImg />

        {/* four image component imported above ...._____>>>>> */}


        {/* 
Aerial Imaging || Immersive Flight  system building starts here----------------->>>>>>>>>>>>>>>*/}

        <Box w={"100%"} h={{ base: "15vh", md: "35vh" }} justifyContent={"center"} display={"flex"} alignContent={"center"} alignItems={"center"}>
          <Box w='80%' h='auto'  >
            <Text textAlign={"center"} fontSize={{ base: "2xl", md: "5xl" }} fontWeight={"500"}>
              Which camera drone is right for you?
            </Text>

          </Box>


        </Box>































        {/* Aerial Imaging || Immersive Flight  system building starts here----------------->>>>>>>>>>>>>>>*/}


        <Footer />


      </Box>



    </>
  );
}

export default CameraDrone;


