import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from "../Components/Footer.jsx"
import Navbar from '../Components/Navbar';
import { Box, Center, Flex, Heading, Text, Image } from '@chakra-ui/react';



const Cart = () => {


    return (
        <>
            <Navbar />
            <Center w="100%" h="auto" bg="#F7F9FA">
                <Text pt={"2"} fontWeight={"700"} textAlign={"justify"} pb={"2"} pl={{ base: "2.5%", md: "10%" }} pr={{ base: "2.5%", md: "10%" }}
                    fontSize={{ base: "10px", md: "12px" }} color="#000000" >
                    Due to safe transport and handling procedures, orders containing
                    batteries cannot be shipped to Guam addresses. Orders containing
                    power stations and related accessories can not be shipped to island
                    addresses such as Hawaii, Alaska, Guam, American Samoa, United States
                    Minor Outlying Islands, and Virgin Islands. Thank you for your understanding.
                </Text>
            </Center>
            <Box w="100%" h="100vh" >
                {/* My Shopping Cart Header here............ */}
                <Box w={{ base: "95%", md: "80%" }} h="100%" border="1px solid lime" m="auto">
                    <Box w="100%" h="auto" pt="5" pb="5">
                        <Heading fontWeight={"500"}>My Shopping Cart</Heading>
                    </Box>
                    <Box display={{ base: "none", md: "block" }} w="100%" h="auto" pt="5" pb="5" borderBottom="1px solid #eceef0">
                        <Flex>
                            <Text w="55%" color="#6C7073">Item</Text>
                            <Text w="13%" color="#6C7073">Item Price</Text>
                            <Text w="16%" color="#6C7073">Quantity</Text>
                            <Text w="10%" color="#6C7073">Price</Text>
                        </Flex>
                    </Box>

                    <Box mt={{ base: "5", md: "5" }} w="100%" h={{ base: "auto", md: "auto" }} borderRadius={"lg"} border={"2px solid #94a3ac"} _hover={{cursor:"pointer", border: "3px solid #008eff" }}>

                        <Box transition={"0.3s ease"} p={5} display="flex" flexDirection="row" w="100%" h="100%">
                            <Box  w={{ base: "60px", md: "150px" }} h={{ base: "60px", md: "120px" }}>
                                <Image pl={2} pr={2} w="100%" h="100%" src={"https://stormsend1.djicdn.com/tpc/uploads/spu/cover/4ea419b081f38056785ae8665d473190@small.png"} alt="drone.png" />
                            </Box>
                            <Box w="auto" display={"flex"} flexDirection={"column"} justifyContent={"center"} h={{ base: "auto", md: "auto" }}>
                                <Text fontWeight={"500"} fontSize={{ base: "14px", md: "18px" }}>{"DJI Mini 4 Pro (DJI RC-N2)"}</Text>
                                <Text fontWeight={"500"} fontSize={{ base: "12px", md: "14px" }}>USD $<Text color="#30a4e5" as="span">{"999"}</Text></Text>
                                {/* <Text fontWeight={"500"} fontSize={{ base: "10px", md: "12px" }}>{"Includes the new DJI RC with a built-ncludes the new DJI RC with a built-in 5.5-inch HD display for clear viewing in strong light and the DJI Fly app pre-installed."}</Text> */}

                            </Box>
                            <Box flex={1} h="auto" border={"1px solid yellow"}></Box>

                        </Box>

                    </Box>

                </Box>
            </Box>

            <Footer />

        </>
    )
}

export default Cart
