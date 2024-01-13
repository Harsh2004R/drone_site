import React, { useEffect, useState } from 'react'
import { Box, useBreakpointValue, Text } from '@chakra-ui/react'




function InitialVideo() {

    const videoStyles = {
        width: '100%',
        height: useBreakpointValue({ base: "70vh", md: "100vh", lg: "100vh" }),
        objectFit: 'cover',
    }
    const videoStyles2 = {
        width: '100%',
        height: useBreakpointValue({ base: "80vh", md: "100vh", lg: "100vh" }),
        objectFit: 'cover',
    }

    const TextStyle = {
        color: "#fff",
        fontSize: "",
        position:"absolute",
        textAlign:"center",
        top:"0",
        left:"0",
        background:"#000",
        height:"100%",
        width:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        fontSize:useBreakpointValue({ base: "80px", md: "100px", lg: "140px" }),
        fontWeight:"500",
        mixBlendMode:"multiply",
        flexDirection:"column"
    }

    return (
        <>

            <Box w="100%" h={{base:"",md:"230vh"}} bg="#000"  position="relative">

                <video
                    style={videoStyles}
                    loop

                    autoPlay={true} // Set to true if you want videos to autoplay
                    muted // Adding this video to start muted
                >
                    <source src={"https://dji-official-fe.djicdn.com/reactor/assets/_next/static/videos/a6ac452d-9fbe-49fc-95ea-e2bffdc80a0b.mp4"} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>


                <Box w="100%" h={{base:"130vh",md:"130vh"}} position={"relative"}>
                    <Box w="100%" h="auto" height={"30vh"}></Box>

                    <video
                        style={videoStyles2}
                        loop

                        autoPlay={true} // Set to true if you want videos to autoplay
                        muted // Adding this video to start muted
                    >
                        <source src={"https://dji-official-fe.djicdn.com/reactor/assets/_next/static/videos/f8221748-07ec-4bc6-a050-ad1cda891694.mp4"} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <Box style={TextStyle}>

                        <Text mt={{base:"",md:""}} mb={{base:"-10%",md:"-5%"}}>See the</Text>
                        <Text mb={{base:"-10%",md:"-5%"}} >unknown</Text>
                        <Text mb={{base:"-10%",md:"-5%"}} >world</Text>
                        <Text mb={{base:"-10%",md:"-5%"}} >in your eyes</Text>
                          
                    </Box>


                </Box>









            </Box>


        </>
    )
}

export default InitialVideo
