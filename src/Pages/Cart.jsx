import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import { Box, Center, Flex, Heading, Text } from '@chakra-ui/react';



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
                </Box>
            </Box>
        </>
    )
}

export default Cart
