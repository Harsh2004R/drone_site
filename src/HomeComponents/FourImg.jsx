// import { Box, Grid, Image } from '@chakra-ui/react';
// import React from 'react'

// const ImageData = [
//     {
//         image1: "https://www1.djicdn.com/cms/uploads/dc9e619bc6ac2bc59d17d0bcaff58b3f.webp",
//         text_svg1: "www1.djicdn.com/cms/uploads/79944970c7d71630e6a98f34d1764670.svg",
//     },
//     {
//         image2: "https://www1.djicdn.com/cms/uploads/09994a9e1f41431e686c06556900bbb2.webp",
//         text_svg2: "https://www1.djicdn.com/cms/uploads/1bd5cd9f763f790d6abbe8193b5c95c8.svg",
//     },
//     {
//         image3: "https://www1.djicdn.com/cms/uploads/cbf96b4e76c9d541c79ca9e40797cd1f.webp",
//         text_svg3: "https://www1.djicdn.com/cms/uploads/92bd5ecd6c16060de84770c1631efd37.svg",
//     },
//     {
//         image4: "https://www1.djicdn.com/cms/uploads/47b9ef9ae26196db022314bf3eebb00d.webp",
//         text_svg4: "",
//     },

// ];

// function FourImg() {
//     return (
//         <>
//             <Box w="100%" h="auto" border="1px solid red">
//                 <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}>
//                     <Box w={{ base: "100=%", md: "95%" }}
//                         m={{ base: "0%", md: "auto", lg: "auto" }} mt={{ base: "2%", md: "0%" }}
//                         mb={{ base: "1%", md: "0%" }} h={{ base: "65vh", md: "80vh" }}

//                     >
//                         <Image w="100%" h="100%" src={ImageData[0].image1} alt="Image data obj error" />


//                     </Box>
//                     <Box w={{ base: "100=%", md: "95%" }}
//                         m={{ base: "0%", md: "auto", lg: "auto" }} mt={{ base: "2%", md: "0%" }}
//                         mb={{ base: "1%", md: "0%" }} h={{ base: "65vh", md: "80vh" }}

//                     >
//                         <Image w="100%" h="100%" src={ImageData[1].image2} alt="Image data obj error" />


//                     </Box>
//                     <Box w={{ base: "100=%", md: "95%" }}
//                         m={{ base: "0%", md: "auto", lg: "auto" }} mt={{ base: "2%", md: "0%" }}
//                         mb={{ base: "1%", md: "0%" }} h={{ base: "65vh", md: "80vh" }}

//                     >
//                         <Image w="100%" h="100%" src={ImageData[2].image3} alt="Image data obj error" />


//                     </Box>
//                     <Box w={{ base: "100=%", md: "95%" }}
//                         m={{ base: "0%", md: "auto", lg: "auto" }} mt={{ base: "2%", md: "0%" }}
//                         mb={{ base: "1%", md: "0%" }} h={{ base: "65vh", md: "80vh" }}

//                     >
//                         <Image w="100%" h="100%" src={ImageData[3].image4} alt="Image data obj error" />


//                     </Box>
//                 </Grid>
//             </Box>
//         </>
//     )
// }

// export default FourImg
import { Box, Grid, Image } from '@chakra-ui/react';
import React from 'react';

const ImageData = [
    {
        image1: "https://www1.djicdn.com/cms/uploads/dc9e619bc6ac2bc59d17d0bcaff58b3f.webp",
        text_svg1: "www1.djicdn.com/cms/uploads/79944970c7d71630e6a98f34d1764670.svg",
        objectPosition: "50% 50%",
    },
    {
        image2: "https://www1.djicdn.com/cms/uploads/09994a9e1f41431e686c06556900bbb2.webp",
        text_svg2: "https://www1.djicdn.com/cms/uploads/1bd5cd9f763f790d6abbe8193b5c95c8.svg",
        objectPosition: "30% 50%",
    },
    {
        image3: "https://www1.djicdn.com/cms/uploads/cbf96b4e76c9d541c79ca9e40797cd1f.webp",
        text_svg3: "https://www1.djicdn.com/cms/uploads/92bd5ecd6c16060de84770c1631efd37.svg",
        objectPosition: "20% 80%",
    },
    {
        image4: "https://www1.djicdn.com/cms/uploads/47b9ef9ae26196db022314bf3eebb00d.webp",
        text_svg4: "",
        objectPosition: "10% 90%",
    },
];




function FourImg() {
    return (
        <>
            <Box w="100%" h="auto" >
                <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}>
                    {ImageData.map((item, index) => (
                        <Box
                            key={index}
                            w={{ base: "100%", md: "98%" }}
                            m={{ base: "0%", md: "auto", lg: "auto" }}
                            mt={{ base: "2%", md: "1%" ,lg:"1%"}}
                            mb={{ base: "1%", md: "1%",lg:"1%" }}
                            h={{ base: "65vh", md: "80vh" }}
                            overflow="hidden"
                        >
                            <Image
                                w="100%"
                                h="100%"
                                objectFit="cover"
                                objectPosition={item.objectPosition}
                                src={item[`image${index + 1}`]}
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
