import React from 'react'
import { Box, Image, Text, useBreakpointValue } from '@chakra-ui/react'
function Video_transmission() {
    const textStyle1 = {
        position: "absolute",
        top: useBreakpointValue({ base: "5vh", md: "25vh", lg: "30vh" }),
        left: "50%",
        fontWeight:"500",
        transform: "translateX(-50%)",
        color: "#ededed",
        fontSize: useBreakpointValue({ base: "17px", md: "16px", lg: "28px" }),
        width: "100%"
    };
    const textStyle2 = {
        position: "absolute",
        top: useBreakpointValue({ base: "9vh", md: "30vh", lg: "35vh" }),
        left: "50%",
        fontWeight:"500",
        transform: "translateX(-50%)",
        color: "white",
        fontSize: useBreakpointValue({ base: "28px", md: "58px", lg: "70px" }),
        fontWeight: "400",
        width: "100%"
    };
    const textStyle3 = {
        position: "absolute",
        top: useBreakpointValue({ base: "15vh", md: "42vh", lg: "47vh" }),
        left: "50%",
        fontWeight:"500",
        transform: "translateX(-50%)",
        color: "white",
        fontSize: useBreakpointValue({ base: "28px", md: "58px", lg: "70px" }),
        width: "100%"
    };
    return (
        <>
            <Box w="100%" h="500vh" bg="#fff" position="relative">
                <Box w="100%" h={{ base: "50vh", md: "150vh" }} >
                    <Text style={textStyle1} textAlign="center">
                        Broad ecosystem
                    </Text>
                    <Text style={textStyle2} textAlign="center">
                        O3 Pro Video Transmission
                    </Text>
                    <Text style={textStyle3} textAlign="center">
                        & Control System
                    </Text>
                    <Image w={{ base: "100%", md: "100%" }} m="auto" h={{ base: "100%", md: "100%" }} src="https://dji-official-fe.djicdn.com/dps/8187d31cd196256f588e3f4deafe093a.jpg" alt="transmiter-image" />
                </Box>
            </Box>

        </>
    )
}

export default Video_transmission
