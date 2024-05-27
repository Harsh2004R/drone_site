import React, { useState, useContext } from 'react';
import { Text, Box, Divider, Image, Button, useBreakpointValue, Grid, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, GridItem } from "@chakra-ui/react";
import Navbar from '../Components/Navbar.jsx';
import Footer from "../Components/Footer.jsx"
import FourImg from "../HomeComponents/FourImg.jsx"
import { AuthContext } from '../Contexts/AuthContextProvider.jsx';
function CameraDrone() {
  const { isAuth, token } = useContext(AuthContext)
  console.log(isAuth, token)
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
  const videoStyles = {
    width: useBreakpointValue({ base: "100%", md: "80%", lg: "80%" }),
    height: useBreakpointValue({ base: "30vh", md: "80vh", lg: "80vh" }),
    objectFit: 'cover',
    margin: "auto"
  }


  return (
    <>
      <Navbar />



      <Box w="100%" h="100vh" bg="#fff">
        <Box w="100%" h={{ base: "21.5vh", md: "20vh" }} bg="#F5F5F5">

          <Box w={{ base: "100%", md: "80%" }} m="auto" h="100%" bg="#" style={{ overflow: "hidden" }}>
            {/* Render images based on currentIndex */}
            <Grid templateColumns={{ base: 'repeat(4, 1fr)', md: 'repeat(8, 1fr)' }} gap={1}>
              <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignContent={"center"} w='100%' h={{ base: "10vh", md: "95%" }}   >
                <Image m="auto" src="https://dji-official-fe.djicdn.com/dps/3b7953435e791d6a56253d87584e34cf.png" w="80%" h="80%" alt="mini_drones" />
                <Text _hover={{ textColor: "#26b0ee", cursor: "pointer" }} fontSize={{ base: "xs", md: "sm" }} textAlign={"center"}>Dji Mavic</Text>
              </Box>
              <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignContent={"center"} w='100%' h={{ base: "10vh", md: "95%" }}   >
                <Image m="auto" src="https://dji-official-fe.djicdn.com/dps/77738ff32f7a228fc58b4f401261e481.png" w="80%" h="80%" alt="mini_drones" />
                <Text _hover={{ textColor: "#26b0ee", cursor: "pointer" }} fontSize={{ base: "xs", md: "sm" }} textAlign={"center"}>Dji Air</Text>
              </Box>
              <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignContent={"center"} w='100%' h={{ base: "10vh", md: "95%" }}   >
                <Image m="auto" src="https://dji-official-fe.djicdn.com/dps/5698cb42a9a1fdce69e22f30550d9767.png" w="80%" h="80%" alt="mini_drones" />
                <Text _hover={{ textColor: "#26b0ee", cursor: "pointer" }} fontSize={{ base: "xs", md: "sm" }} textAlign={"center"}>Dji Mini</Text>
              </Box>
              <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignContent={"center"} w='100%' h={{ base: "10vh", md: "95%" }}   >
                <Image m="auto" src="https://dji-official-fe.djicdn.com/dps/97e1b5ab20211e739898969647666de1.png" w="80%" h="80%" alt="mini_drones" />
                <Text _hover={{ textColor: "#26b0ee", cursor: "pointer" }} fontSize={{ base: "xs", md: "sm" }} textAlign={"center"}>Dji Avata2</Text>
              </Box>
              <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignContent={"center"} w='100%' h={{ base: "10vh", md: "95%" }}   >
                <Image m="auto" src="https://dji-official-fe.djicdn.com/dps/d13ba498aecd93533f69bcd1500458af.png" w="80%" h="80%" alt="mini_drones" />
                <Text _hover={{ textColor: "#26b0ee", cursor: "pointer" }} fontSize={{ base: "xs", md: "sm" }} textAlign={"center"}>Dji Inspire2</Text>
              </Box>
              <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignContent={"center"} w='100%' h={{ base: "10vh", md: "95%" }}   >
                <Image m="auto" src="https://dji-official-fe.djicdn.com/dps/445acaa272ac55184d736f9518c50b3c.png" w="80%" h="80%" alt="mini_drones" />
                <Text _hover={{ textColor: "#26b0ee", cursor: "pointer" }} fontSize={{ base: "xs", md: "sm" }} textAlign={"center"}>Dji FPV</Text>
              </Box>
              <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignContent={"center"} w='100%' h={{ base: "10vh", md: "95%" }}   >
                <Image m="auto" src="https://dji-official-fe.djicdn.com/dps/b429552c65fa90e612204031c752b2e0.png" w="80%" h="80%" alt="mini_drones" />
                <Text _hover={{ textColor: "#26b0ee", cursor: "pointer" }} fontSize={{ base: "xs", md: "sm" }} textAlign={"center"}>RC</Text>
              </Box>
              <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignContent={"center"} w='100%' h={{ base: "10vh", md: "95%" }}   >
                <Image m="auto" src="https://dji-official-fe.djicdn.com/dps/f14c7c1d91574014937b8f52e8226e1a.png" w="80%" h="80%" alt="mini_drones" />
                <Text _hover={{ textColor: "#26b0ee", cursor: "pointer" }} fontSize={{ base: "xs", md: "sm" }} textAlign={"center"}>Dji Power</Text>
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
        <Box className="hero_wrapper" w='100%' h={{ base: "80vh", md: "90vh" }} display={"flex"} justifyContent={"center"} alignContent={"center"} alignItems={"center"}
        >
          <Box
            position={"relative"}
            w="99%" h={{ base: "100%", md: "100%" }}
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




        {/* Aerial Imaging || Immersive Flight  system building starts here----------------->>>>>>>>>>>>>>>*/}

        <Box w={"100%"} h={{ base: "auto", md: "auto" }} flexDirection={"column"} justifyContent={"center"} display={"flex"} alignContent={"center"} alignItems={"center"}>
          <Box w='80%' h={{ base: "20vh", md: "30vh" }} justifyContent={"center"} display={"flex"} alignContent={"center"} alignItems={"center"}>
            <Text textAlign={"center"} fontSize={{ base: "30px", md: "5xl" }} fontWeight={"500"}>
              Which camera drone is right for you?
            </Text>

          </Box>



          <Tabs
            position="relative" variant="unstyled"
          >
            <Box
              // border={"1px solid cyan"}
              w="100%" h="15vh" display={"flex"} justifyContent={"center"} alignContent={"center"} alignItems={"center"} flexDirection={"column"}>
              <TabList>
                <Tab fontSize={{ base: "12px", md: "15px" }}>Aerial Imaging</Tab>
                <Tab fontSize={{ base: "12px", md: "15px" }}>Immersive Flight</Tab>
              </TabList>
              <TabIndicator
                mt="30px"
                height="1.65px"
                bg="rgb(0,0,0,0.8)"
                borderRadius="0.5px"
              />
            </Box>

            <TabPanels>
              <TabPanel w={{ base: "350px", md: "900px" }} h="auto">

                {/* Aerial Imaging container here----------------------->>>>>>>>>>>> */}
                <Box
                  w={{ base: "100%", md: "100%" }} border="1px solid red" h="100%"
                >
                  <Grid templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }} gap={3} >
                    {/* mapping all the Aerial Imagin data from backend here------>>>> */}
                    <Box w="100%" h="auto" bg="fff">





                      {/* product image */}
                      <Box w={{ base: "90%", md: "90%" }} m="auto" h={{ base: "16vh", md: "30vh" }} >
                        <Image src="https://dji-official-fe.djicdn.com/cms/uploads/ae5d8b9987be8d5ecdeb5d502a1e887c.png" alt="" />
                      </Box>
                      {/* product image */}





                      <Text textAlign={"center"} fontSize={{ base: "10px", md: "12px" }} color={"#d0021b"}>Flagship</Text>





                      {/* pro name */}
                      <Text textAlign={"center"} fontWeight={"350"} fontSize={{ base: "16px", md: "25px" }} color={"#3a3738"}>DJI Mavic 3 Pro</Text>
                      {/* pro name */}




                      {/* where to buy  */}
                      {/* learn more */}
                      <Box
                        display={"flex"}
                        justifyContent={"space-evenly"}
                        alignContent={"center"}
                        alignItems={"center"}
                        w="100%" h="100px"
                        flexDirection={"column"}
                      // border="1px solid red"
                      >

                        <Box
                          display={"flex"}
                          justifyContent={"center"}
                          alignContent={"center"}
                          alignItems={"center"}
                          _hover={{ cursor: "pointer", bg: "#4897ef" }}
                          w={{ base: "50%", md: "40%" }}
                          height={{ base: "30px", md: "30px" }}
                          borderTopRightRadius={"17px"}
                          borderTopLeftRadius={"17px"}
                          borderBottomRightRadius={"17px"}
                          borderBottomLeftRadius={"17px"}
                          bg="#2484ef">

                          <Text textAlign={"center"} fontWeight={"400"} fontSize={{ base: "10px", md: "15px" }} color={"#fff"}>Where to buy</Text>
                        </Box>
                        <Box w="100%" h="auto" >
                          <Text _hover={{ cursor: "pointer", textDecoration: "underline" }} textAlign={"center"} fontWeight={"500"} fontSize={{ base: "10px", md: "12px" }} color={"#4897ef"}>Learn more {">"}</Text>
                          <Divider />
                        </Box>
                      </Box>
                      {/* where to buy  */}
                      {/* learn more */}








                      {/*pro  weight */}
                      {/* pro flight time */}
                      <Box
                        w="100%" h={{ base: "120px", md: "210px" }}
                      // border={"1px solid cyan"}
                      >
                        <Text mt="10px" textAlign={"center"} fontWeight={"500"} fontSize={{ base: "24px", md: "42px" }} color={"#000"}>958 g</Text>
                        <Text mt="-3px" textAlign={"center"} fontWeight={"300"} fontSize={{ base: "11px", md: "16px" }} color={"#000"}>Takeoff Weight</Text>

                        <Box
                          display={"flex"}
                          justifyContent={"center"}
                          alignContent={"center"}
                          alignItems={"center"}
                          flexDirection={"column"}
                          mt="10px" w="100%" h="auto"
                        // border="1px solid purple"
                        >
                          <Image w={{ base: "20%", md: "18%" }} h={"auto"} src="https://dji-official-fe.djicdn.com/dps/f9127d27145b69a9c196c225c91e4e32.svg" alt="svg" />
                          <Text mt="3px" textAlign={"center"} fontWeight={"300"} fontSize={{ base: "11px", md: "16px" }} color={"#000"}>
                            43 mins Max Flight Time
                          </Text>
                        </Box>
                      </Box>
                      {/*pro  weight */}
                      {/* pro flight time */}









                      {/* camera resolution */}
                      <Box
                        display={"flex"}
                        justifyContent={"center"}
                        alignContent={"center"}
                        alignItems={"center"}
                        flexDirection={"column"}
                        mt="10px" w="100%" h="auto"
                      // border="1px solid red"
                      >
                        <Image w={{ base: "20%", md: "18%" }} h="auto" src="https://dji-official-fe.djicdn.com/dps/cd0846ffff48ba7425dcb2a71b58f28c.svg" alt="svg" />
                        <Text mt="3px" textAlign={"center"} fontWeight={"300"} fontSize={{ base: "11px", md: "16px" }} color={"#000"}>4/3 CMOS Hasselblad Camera
                          1/1.3-inch CMOS Medium Tele Camera
                          1/2-inch CMOS Tele Camera
                        </Text>
                      </Box>
                      {/* camera resolution */}






                      {/* photo resolution */}
                      <Text mt="10px" textAlign={"center"} fontWeight={"500"} fontSize={{ base: "24px", md: "42px" }} color={"#000"}>48 MP</Text>
                      <Text mt="-3px" textAlign={"center"} fontWeight={"300"} fontSize={{ base: "11px", md: "16px" }} color={"#000"}>Max Photo Resolution</Text>
                      {/* photo resolution */}





                      {/* transmiter range */}
                      <Box
                        display={"flex"}
                        justifyContent={"center"}
                        alignContent={"center"}
                        alignItems={"center"}
                        flexDirection={"column"}
                        mt="10px" w="100%" h="auto"
                        //  border="1px solid red"
                         >
                        <Image w={{ base: "20%", md: "18%" }} h="auto" src="https://dji-official-fe.djicdn.com/dps/3d0d77b212222ab4f20219cc95ca6d20.svg" alt="svg" />
                        <Text mt="3px" textAlign={"center"} fontWeight={"300"} fontSize={{ base: "11px", md: "16px" }} color={"#000"}>DJI O3+ HD Digital Video Transmission

                          Up to 15 km Transmission Distance
                          1080p/60fps Live Feed
                        </Text>
                      </Box>
                      {/* transmiter range */}





                    </Box>
                  </Grid>

                </Box>
              </TabPanel>
              <TabPanel w={{ base: "350px", md: "900px" }} border="1px solid blue" h="150vh">
                <Box
                  w={{ base: "100%", md: "100%" }} border="1px solid blue" h="100%"
                >
                  <Grid templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }} gap={3} >
                    {/* mapping all the Aerial Imagin data from backend here------>>>> */}
                    <Box w="100%" h="120vh" bg="#eee">


                      <Box w={{ base: "90%", md: "90%" }} m="auto" h={{ base: "16vh", md: "30vh" }} border={"1px solid lime"}>
                        <Image src="https://dji-official-fe.djicdn.com/cms/uploads/ae5d8b9987be8d5ecdeb5d502a1e887c.png" alt="" />
                      </Box>















                    </Box>
                  </Grid>
                </Box>

              </TabPanel>
            </TabPanels>

          </Tabs>

        </Box>































        {/* Aerial Imaging || Immersive Flight  system building starts here----------------->>>>>>>>>>>>>>>*/}


        <Footer />


      </Box >



    </>
  );
}

export default CameraDrone;


