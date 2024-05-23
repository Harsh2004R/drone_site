
import { Box, Grid, Image, useBreakpointValue, Text } from '@chakra-ui/react';
import React from 'react';

const ImageData = [
    {
        image: "https://www1.djicdn.com/cms/uploads/dc9e619bc6ac2bc59d17d0bcaff58b3f.webp",
        text_svg1: "www1.djicdn.com/cms/uploads/79944970c7d71630e6a98f34d1764670.svg",
        objectPosition: "50% 50%",

    },
    {
        image: "https://www1.djicdn.com/cms/uploads/53c3f3c5718ddeaa6bebbcf2e0a4f444.webp",
        text_svg2: "https://www1.djicdn.com/cms/uploads/282d6b77b8dc608b6b6f7a344e7b6a91.svg",
        objectPosition: "50% 50%",

    },
    {
        image: "https://www1.djicdn.com/cms/uploads/09994a9e1f41431e686c06556900bbb2.webp",
        text_svg3: "https://www1.djicdn.com/cms/uploads/92bd5ecd6c16060de84770c1631efd37.svg",
        objectPosition: "20% 80%",

    },
    {
        image: "https://www1.djicdn.com/cms/uploads/47b9ef9ae26196db022314bf3eebb00d.webp",
        text_svg4: "",
        objectPosition: "10% 90%",

    },
];




function FourImg() {

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
    return (
        <>
            <Box position="relative" w="100%" h="auto" >
                <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}>
                    {ImageData.map((item, index) => (
                        <Box
                            key={index}
                            w={{ base: "100%", md: "98%" }}
                            m={{ base: "0%", md: "auto", lg: "auto" }}
                            mt={{ base: "2%", md: "1%", lg: "1%" }}
                            mb={{ base: "1%", md: "1%", lg: "1%" }}
                            h={{ base: "65vh", md: "80vh" }}
                            overflow="hidden"
                        >
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
