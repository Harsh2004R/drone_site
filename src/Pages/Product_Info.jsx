import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import { Carousel } from "react-responsive-carousel";
import { Box, Container, Text, useBreakpointValue, Image, border, Grid } from "@chakra-ui/react"


const slides = [
    {
        image:
            "https://stormsend1.djicdn.com/tpc/uploads/carousel/image/36e6316fa6fd325c68b950b30a192138@ultra.jpg",

    },
    {
        image:
            "https://stormsend1.djicdn.com/tpc/uploads/carousel/image/852e505bb7a82270234b15058d96868d@ultra.jpg",

    },
    {
        image:
            "https://stormsend1.djicdn.com/tpc/uploads/carousel/image/56f9c91eaeacbec6de9ed8e7c467637d@ultra.jpg",

    },
    {
        image:
            "https://stormsend1.djicdn.com/tpc/uploads/carousel/image/c54c054b1e2f6710b44e70a34eab81bf@ultra.jpg",

    },
    {
        image:
            "https://stormsend1.djicdn.com/tpc/uploads/carousel/image/05dcf9d62bffe45e38f82391e9a9e012@ultra.jpg",

    },
    {
        image:
            "https://stormsend1.djicdn.com/tpc/uploads/carousel/image/a73cb58ff813f58113514e22221ba428@ultra.jpg",

    }, {
        image:
            "https://stormsend1.djicdn.com/tpc/uploads/carousel/image/8326489362003949f8b5a249087a5110@ultra.jpg",

    }, {
        image:
            "https://stormsend1.djicdn.com/tpc/uploads/carousel/image/11053cf9abb202575e1e86edb22126fd@ultra.jpg",


    }
];


const Product_Info = () => {

    const [selectedOption, setSelectedOption] = useState("image");
    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };
    const imageStyle = {
        width: useBreakpointValue({ base: "100%", md: "100%" }),
        height: useBreakpointValue({ base: "50vh", md: "75vh" }),
        // border:"1px solid cyan",
        objectFit: "cover",
    };
    const videoStyles = {
        width: '100%',
        height: useBreakpointValue({ base: "50vh", md: "75vh" }),
        objectFit: 'cover',

    }
    return (
        <>
            <Navbar />

            <Box w="100%" position={"relative"} h="100vh" bg="#FFF">
                <Container
                    //  border={"2px solid lime"} 
                    p={0} maxW={{ base: "100%", md: "6xl" }} m="auto" h="100vh" display={"flex"} flexDirection={{ base: "column", md: "row" }}>



                    {/* /////////////////////////////////// image slides , video player container here /////////////////////////////////////////////// */}
                    <Box w="100%" h={{ base: "100vh", md: "100vh" }} border={"1px solid coral"} >


                        {selectedOption === "image" &&

                            <Carousel infiniteLoop showThumbs={false}>
                                {slides.map((slide, index) => (
                                    <Box key={index} position="relative">
                                        <Image style={imageStyle} w="100%" h="100%" src={slide.image} />

                                    </Box>
                                ))}
                            </Carousel>

                        }
                        {selectedOption === "video" &&
                            <Box w="100%" h={{ base: "50vh", md: "75vh" }}>
                                <video style={videoStyles} autoPlay={true} muted={true}
                                >
                                    <source src="https://terra-1-g.djicdn.com/851d20f7b9f64838a34cd02351370894/%E5%A4%A9%E7%A9%BA%E4%B9%8B%E5%9F%8E%209%20%E5%91%A8%E5%B9%B4%E5%BD%B1%E5%83%8F%E5%A4%A7%E8%B5%9B/1124.mp4" />
                                </video>
                            </Box>

                        }



                        <Box bg="#eee" border="1px solid lime">
                            <Box display={"flex"} alignContent={"center"} alignItems={"center"} justifyContent={"center"} m="auto" w={{ base: "90%", md: "90%", lg: "100%" }} h={{ base: "10vh", md: "15vh", lg: "15vh" }} borderTop="1px solid #CFD8DC" borderBottom="1px solid #CFD8DC" >
                                <Box display={"flex"} alignContent={"center"} gap={"20px"} alignItems={"center"} justifyContent={"center"} w="100%" h={{ base: "30%", md: "35%", lg: "33%" }}
                                // border={"1px solid red"}
                                >
                                    <Box onClick={() => handleOptionClick("image")}
                                        cursor="pointer"
                                        backgroundColor={selectedOption === "image" ? "#000" : "transparent"}
                                        color={selectedOption === "image" ? "#fff" : "#000"}
                                        border={"0.5px solid #bbb"} _hover={{ bg: "#000", textColor: "#fff" }} display={"flex"} alignContent={"center"} alignItems={"center"} justifyContent={"center"} w="auto" h="100%" borderTopRightRadius={"15px"} borderTopLeftRadius={"15px"} borderBottomRightRadius={"15px"} borderBottomLeftRadius={"15px"}>
                                        <Box pl="1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 1024 1024">
                                                <path fillOpacity=".85" fillRule="evenodd" d="M123.219277,257 L160.474766,257 L160.474766,704.881343 C160.474766,740.227567 189.128542,768.881343 224.474766,768.881343 L832,768.881343 L832,810.151283 C832,839.891108 805.486627,864 772.780723,864 L123.219277,864 C90.5133735,864 64,839.891108 64,810.151283 L64,310.848717 C64,281.108892 90.5133735,257 123.219277,257 Z M256,161 L896,161 C931.346224,161 960,189.653776 960,225 L960,672 C960,707.346224 931.346224,736 896,736 L256,736 C220.653776,736 192,707.346224 192,672 L192,225 C192,189.653776 220.653776,161 256,161 Z M257,642 L864,642 L864,538.499607 C787.313375,461.886622 747.588314,422.366917 744.824818,419.940491 C721.167637,401.108044 687.3203,404.996441 669.122953,428.469924 L540.896587,588.264573 L458.288304,496.23489 C437.666478,475.253165 403.602893,475.253165 382.586439,496.23489 C333.437235,555.148892 300.373072,591.625165 257,642 Z M369,412 C413.18278,412 449,376.18278 449,332 C449,287.81722 413.18278,252 369,252 C324.81722,252 289,287.81722 289,332 C289,376.18278 324.81722,412 369,412 Z"></path>
                                            </svg>
                                        </Box>
                                        <Text p={1} ml={"4px"} mr="4px" fontSize={{ base: "10px", md: "12px", lg: "12px" }}>

                                            Photos
                                        </Text>
                                    </Box>
                                    <Box onClick={() => handleOptionClick("video")}
                                        cursor="pointer"
                                        backgroundColor={selectedOption === "video" ? "#000" : "transparent"}
                                        color={selectedOption === "video" ? "#fff" : "#000"}
                                        border={"0.5px solid #bbb"} _hover={{ bg: "#000", textColor: "#fff" }} display={"flex"} alignContent={"center"} alignItems={"center"} justifyContent={"center"} w="auto" h="100%" borderTopRightRadius={"15px"} borderTopLeftRadius={"15px"} borderBottomRightRadius={"15px"} borderBottomLeftRadius={"15px"}>
                                        <Box ml="1">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="16" height="16" fill="currentColor">
                                                <path fillOpacity=".85" fillRule="evenodd" d="M815.456414,568.245314 L361.495201,824.710618 C330.712165,842.101489 291.662866,831.239029 274.276151,800.448635 C268.850888,790.840955 266,779.993947 266,768.959678 L266,256.029069 C266,220.666791 294.659941,192 330.013769,192 C341.0454,192 351.889816,194.851569 361.495201,200.278129 L815.456414,456.743434 C846.23945,474.134304 857.099314,513.192937 839.712599,543.983331 C833.9845,554.127308 825.597966,562.515845 815.456414,568.245314 Z"></path>
                                            </svg>
                                        </Box>
                                        <Text p={1} ml={"4px"} mr="4px" fontSize={{ base: "10px", md: "12px", lg: "12px" }}>Intro</Text>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>



                    </Box>
                    {/* /////////////////////////////////// image slides , video player container here /////////////////////////////////////////////// */}











                    <Box w="100%" h="100vh" border={"1px solid blue"} overflow={"auto"} css={{ scrollbarWidth: "none", msOverflowStyle: "none" }} _webkit={{ overflowScrolling: "touch", "&::-webkit-scrollbar": { display: "none" } }}>

                        <Box w="100%" p={5} h="auto" border={"1px solid red"} overflow={"hidden"} m={2} >

                            <Text fontSize={{ base: "2xl", md: "32px" }} fontWeight={{ base: "500", md: "500" }}>
                                DJI Mavic 3 Pro (DJI RC)
                            </Text>

                            <Text color="#000" fontSize={{ base: "xl", md: "25px" }} fontWeight={{ base: "500", md: "500" }}>USD $
                                <Text color="#30a4e5" as="span">2,199</Text>
                            </Text>

                            <Box mt="20px" borderRadius={"xl"} p={5} bg="#ECEFF1" w="100%" h="auto">
                                <Box p={5} borderRadius={"xl"} w="100%" border={"1px solid #b0b1b2"} h="auto">
                                    <Text fontSize={{ base: "14px", md: "15px" }}><li>Fast-Delivery Guarantee</li></Text>
                                    <Text fontSize={{ base: "14px", md: "15px" }}><li>1% DJI Credit Reward</li></Text>
                                    <Text fontSize={{ base: "14px", md: "15px" }}><li>14-Day Returns</li></Text>
                                </Box>
                                <Box p={5} borderRadius={"xl"} mt="10px" w="100%" border={"1px solid #b0b1b2"} h="auto">
                                    <Text fontSize={{ base: "14px", md: "15px" }}><li>Hasselblade camera</li></Text>
                                    <Text fontSize={{ base: "14px", md: "15px" }}><li>dual tele camera</li></Text>
                                    <Text fontSize={{ base: "14px", md: "15px" }}><li>Heigh flight time performance</li></Text>
                                    <Text fontSize={{ base: "14px", md: "15px" }}><li>Omnidirectional obstacle sensing</li></Text>
                                    <Text fontSize={{ base: "14px", md: "15px" }}><li>Long range Hd video transmission</li></Text>
                                </Box>

                            </Box>



                            <Text mt={10} mb={5} color="#000" fontWeight={{ base: "500", md: "500" }} fontSize={{ base: "xl", md: "xl" }}>Select Options</Text>
                            <Box w="100%" h={{ base: "15vh", md: "20vh" }} borderRadius={"lg"} border={"2px solid #94a3ac"} _hover={{border:"3px solid #008eff"}}>
                               
                                <Box p={5} display={"flex"} flexDirection="row" w="100%" h="100%">
                                    <Box w={{ base: "30%", md: "25%" }}  h={{ base: "100%", md: "100%" }}>
                                        <Image pl={2} pr={2} w="100%" h="100%" src="https://stormsend1.djicdn.com/tpc/uploads/carousel/image/8326489362003949f8b5a249087a5110@ultra.jpg" alt="drone.png" />
                                    </Box>
                                    <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} w={{ base: "70%", md: "75%" }}  h={{ base: "100%", md: "100%" }}>
                                        <Text fontWeight={"500"} fontSize={{ base: "14px", md: "18px" }}>DJI Mavic 3 Pro Fly More Combo (DJI RC) </Text>
                                        <Text fontWeight={"500"} fontSize={{ base: "12px", md: "14px" }}>USD $<Text color="#30a4e5" as="span">2,199</Text></Text>
                                    </Box>
                                </Box>

                            </Box>

                        </Box>

                    </Box>

                </Container>
            </Box>

            {/* <Box boxShadow="rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px" position={"sticky"} bottom={0} w="100%" h={{ base: "15vh", md: "15vh" }} bg="#FFF">

            </Box> */}
        
        
        </>
    )
}

export default Product_Info
