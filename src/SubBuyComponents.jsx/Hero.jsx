import React from 'react'
import { Text, Box, Image, Grid } from "@chakra-ui/react";

function Hero() {
    return (
        <>
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
            <Box w='100%' h={{ base: "80vh", md: "90vh" }} display={"flex"} justifyContent={"center"} alignContent={"center"} alignItems={"center"}
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


        </>
    )
}

export default Hero
