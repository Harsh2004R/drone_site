
import { Box, Grid, Image, useBreakpointValue, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const ImageData1 = [
    {
        image: "https://www1.djicdn.com/cms/uploads/dc9e619bc6ac2bc59d17d0bcaff58b3f.webp",
        text_svg: "https://www1.djicdn.com/cms/uploads/79944970c7d71630e6a98f34d1764670.svg",
        url: "",
        learn_url: "",
        buy_url: "",
        objectPosition: "50% 50%",

    },
    {
        image: "https://www1.djicdn.com/cms/uploads/53c3f3c5718ddeaa6bebbcf2e0a4f444.webp",
        text_svg: "https://www1.djicdn.com/cms/uploads/282d6b77b8dc608b6b6f7a344e7b6a91.svg",
        url: "",
        learn_url: "",
        buy_url: "",
        objectPosition: "50% 50%",

    },
    {
        image: "https://www1.djicdn.com/cms/uploads/09994a9e1f41431e686c06556900bbb2.webp",
        text_svg: "https://www1.djicdn.com/cms/uploads/92bd5ecd6c16060de84770c1631efd37.svg",
        url: "",
        learn_url: "",
        buy_url: "",
        objectPosition: "20% 80%",

    },
    {
        image: "https://www1.djicdn.com/cms/uploads/47b9ef9ae26196db022314bf3eebb00d.webp",
        text_svg: "https://dji-official-fe.djicdn.com/dps/5086b4aa705f909f103008bbf75b43f1.svg",
        url: "",
        learn_url: "",
        buy_url: "",
        objectPosition: "10% 90%",

    },
];



const ImageData2 = [
    {
        image: "https://dji-official-fe.djicdn.com/dps/c2cf5f3b8c738ee773a4035a4da36214.jpg",
        text_svg: "https://dji-official-fe.djicdn.com/dps/53f699de8bfca9acdc59281f81121913.svg",
        url: "",
        learn_url: "",
        buy_url: "",
        objectPosition: "50% 50%",

    },
    {
        image: "https://dji-official-fe.djicdn.com/dps/a0d11066ee221205f88cba5ff2f07836.jpg",
        text_svg: "https://www1.djicdn.com/cms/uploads/79944970c7d71630e6a98f34d1764670.svg",
        url: "",
        learn_url: "",
        buy_url: "",
        objectPosition: "50% 50%",

    },
    {
        image: "https://dji-official-fe.djicdn.com/dps/e49a66fff20c5b41a43665582a770578.jpg",
        text_svg: "https://dji-official-fe.djicdn.com/dps/5086b4aa705f909f103008bbf75b43f1.svg",
        url: "",
        objectPosition: "60% 30%",

    },
    {
        image: "https://dji-official-fe.djicdn.com/dps/2389a2287c637fb8ca719370290e30d7.jpg",
        text_svg: "https://dji-official-fe.djicdn.com/dps/c5c9efc48e7711acf2cb1c3a8da9651a.svg",
        url: "",
        learn_url: "",
        buy_url: "",
        objectPosition: "50% 50%",

    },
];




function FourImg() {
    const imageData = location.pathname === "/buy/camera_drones" ? ImageData2 : ImageData1;

    const svgStyle = {
        position: "absolute",
        top: useBreakpointValue({ base: "10%", md: "10vh", lg: "10vh" }),
        left: "50%",
        transform: "translateX(-50%)",



    };
    const textStyle1 = {
        position: "absolute",
        textAlign: "center",
        textDecoration: "underline", fontSize: "15px",
        top: useBreakpointValue({ base: "10%", md: "10vh", lg: "18vh" }),
        left: "42%",
        transform: "translateX(-50%)",
        color: "#26b0ee",


    };
    const textStyle2 = {
        position: "absolute",
        textAlign: "center",
        textDecoration: "underline", fontSize: "15px",
        top: useBreakpointValue({ base: "10%", md: "10vh", lg: "18vh" }),
        left: "58%",
        transform: "translateX(-50%)",
        color: "#26b0ee",


    };
    return (
        <>
            <Box position="relative" w="100%" h="auto" >
                <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}>
                    {imageData.map((item, index) => (
                        <Box
                            // border={"1px solid red"}
                            key={index}
                            w={{ base: "100%", md: "98%" }}
                            m={{ base: "0%", md: "auto", lg: "auto" }}
                            mt={{ base: "2%", md: "1%", lg: "1%" }}
                            mb={{ base: "1%", md: "1%", lg: "1%" }}
                            h={{ base: "65vh", md: "85vh" }}
                            overflow="hidden"
                        >
                            <Box 
                            // border={"1px solid red"}
                            zIndex={"999"} position={"absolute"} w={{ base: "99%", md: "49%" }} h={{ base: "10%", md: "20%" }}>
                                {/* svg box here... */}
                                {item.text_svg && (
                                    <Link to={item.url}>
                                        <Box
                                            // border={"1px solid blue"}
                                            as="img"
                                            src={item.text_svg}
                                            alt={`SVG ${index + 1}`}
                                            style={svgStyle}
                                            zIndex="999"
                                            width={"40%"}
                                        />
                                        <Box display={"flex"} justifyContent={"center"} alignContent={"center"} alignItems={"center"}>
                                            <Text style={textStyle1} > Learn More</Text>
                                            <Text style={textStyle2}>Where to Buy</Text>
                                        </Box>
                                    </Link>
                                )}
                            </Box>

                            <Image
                                w="100%"
                                h="100%"
                                objectFit="cover"
                                objectPosition={item.objectPosition}
                                src={item.image}
                                alt={`Image ${index + 1}`}
                            />


                        </Box>
                    ))}


                </Grid>
            </Box>
        </>

    );
}

export default FourImg;
