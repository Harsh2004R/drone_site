import React, { useEffect, useState } from 'react'
import { Box, useBreakpointValue, Text } from '@chakra-ui/react'




function InitialVideo() {

    const videoStyles = {
        width: '100%',
        height: useBreakpointValue({ base: "70vh", md: "100vh", lg: "100vh" }),
        objectFit: 'cover',
    }

    const TextStyle = {
        color: "#fff",
        fontSize: ""
    }

    return (
        <>

            <Box w="100%" h="240vh" bg="#000" border="2px solid lime" position="relative">

                <video
                    style={videoStyles}
                    loop

                    autoPlay={true} // Set to true if you want videos to autoplay
                    muted // Adding this video to start muted
                >
                    <source src={"https://dji-official-fe.djicdn.com/reactor/assets/_next/static/videos/a6ac452d-9fbe-49fc-95ea-e2bffdc80a0b.mp4"} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>


                {/* <video
                    style={videoStyles}
                    loop

                    autoPlay={true} // Set to true if you want videos to autoplay
                    muted // Adding this video to start muted
                >
                    <source src={"https://dji-official-fe.djicdn.com/reactor/assets/_next/static/videos/f8221748-07ec-4bc6-a050-ad1cda891694.mp4"} type="video/mp4" />
                    Your browser does not support the video tag.
                </video> */}


                <Box w="100%" h="auto" height={"40vh"}></Box>

                <Text textAlign={"center"} color={"#fff"} fontSize={{ base: "80px", md: "140px" }} mb={{ base: "-10%", md: "-6%" }}>See the</Text>
                <Text textAlign={"center"} color={"#fff"} fontSize={{ base: "80px", md: "140px" }} mb={{ base: "-10%", md: "-6%" }}>unknown</Text>
                <Text textAlign={"center"} color={"#fff"} fontSize={{ base: "80px", md: "140px" }} mb={{ base: "-10%", md: "-6%" }}>world</Text>
                <Text textAlign={"center"} color={"#fff"} fontSize={{ base: "80px", md: "140px" }} mb={{ base: "-10%", md: "-6%" }}>in your eyes</Text>




            </Box>


        </>
    )
}

export default InitialVideo
