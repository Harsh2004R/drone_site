import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from "../Components/Footer.jsx"
import Navbar from '../Components/Navbar';
import { Box, Center, Flex, Heading, Text, Image, ButtonGroup, Button, IconButton } from '@chakra-ui/react';
import { AddIcon, DeleteIcon, MinusIcon } from '@chakra-ui/icons';
import axios from 'axios';



const Cart = () => {

    const Zustand_state = localStorage.getItem("cart-items");
    const parsed_Zustand_state = JSON.parse(Zustand_state)
    const cartItems = parsed_Zustand_state.state.cart;
    const cartArray = Object.keys(cartItems).map(productID => {
        return {
            product_id: productID,
            quantity: cartItems[productID]
        }
    })
    // console.log(cartArray)



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
                <Box
                    // border="1px solid lime"
                    w={{ base: "95%", md: "80%" }} h="100%" m="auto">
                    <Box w="100%" h="auto" pt="5" pb="5">
                        <Heading fontWeight={"500"}>My Shopping Cart</Heading>
                    </Box>
                    <Box display={{ base: "none", md: "block" }} w="100%" h="auto" pt="5" pb="5" borderBottom="1px solid #eceef0">
                        <Flex w="100%" justifyContent={"space-evenly"}>
                            <Text fontSize={{ base: "0px", md: "16px" }} w="60%" color="#6C7073">Item</Text>
                            <Text fontSize={{ base: "0px", md: "16px" }} w="11%" color="#6C7073">Item Price</Text>
                            <Text fontSize={{ base: "0px", md: "16px" }} w="12%" color="#6C7073">Quantity</Text>
                            <Text fontSize={{ base: "0px", md: "16px" }} w="18%" color="#6C7073">Price</Text>
                        </Flex>
                    </Box>

                    <Box mt={{ base: "5", md: "5" }} w="100%" h={{ base: "auto", md: "auto" }} borderRadius={"lg"} transition="0.2s ease" _hover={{ transition: "0.2s ease", cursor: "pointer", border: "3px solid #53a3ef" }}>

                        <Box transition={"0.3s ease"} p={{ base: '2', md: "5" }} display="flex" flexDirection="row" w="100%" h="100%">
                            <Box display={"flex"} justifyContent={"center"} alignContent={"center"} alignItems={"center"} w={{ base: "100px", md: "150px" }} h="auto">
                                <Image pl={2} pr={2} w="100%" h={{ base: "80px", md: "120px" }} src={"https://stormsend1.djicdn.com/tpc/uploads/spu/cover/4ea419b081f38056785ae8665d473190@small.png"} alt="drone.png" />
                            </Box>
                            <Box w={{ base: "50%", md: "45%" }} display={"flex"} flexDirection={"column"} justifyContent={"center"} h={{ base: "auto", md: "auto" }}>
                                <Text fontWeight={"500"} fontSize={{ base: "14px", md: "18px" }}>{"DJI Mini 4 Pro (DJI RC-N2)"}</Text>
                                <Text fontWeight={"500"} fontSize={{ base: "12px", md: "14px" }} display={{ base: "block", md: "none" }}>USD $<Text color="#30a4e5" as="span">{"999"}</Text></Text>
                                <Text fontWeight={"500"} color="#30a4e5" display={{ base: "block", md: "none" }} fontSize={{ base: "10px", md: "12px" }}>Remove</Text>

                            </Box>
                            <Center justifyContent={"space-evenly"} w={{ base: "50%", md: "50%" }} flex={1} h="auto" >
                                <Text display={{ base: "none", md: "block" }} fontSize={{ base: "16px", md: "16px" }} color="#6C7073">
                                    USD $2,199
                                </Text>
                                <ButtonGroup size='sm' isAttached variant='outline'>
                                    <IconButton _hover={{ color: "blue" }} aria-label='dicreament' icon={<MinusIcon />} />
                                    <Center pl="3" pr="3" borderTop={"1px solid #e8e8e8"} borderBottom={"1px solid #e8e8e8"}><Text color="#6C7073">5</Text></Center>
                                    <IconButton _hover={{ color: "blue" }} aria-label='increament' icon={<AddIcon />} />
                                </ButtonGroup>
                                <Text display={{ base: "none", md: "block" }} fontWeight={''} fontSize={{ base: "16px", md: "16px" }} color="#000000">
                                    USD $2,199
                                </Text>
                                <IconButton display={{ base: "none", md: "block" }} ml="2" mr="2" bg="transparent" transition={"0s ease"} _hover={{ color: "#f22847", borderRadius: "50%", bg: "#dadada" }} aria-label='Add to friends' icon={<DeleteIcon />} />
                            </Center>

                        </Box>

                    </Box>



                </Box>
            </Box>

            <Footer />

        </>
    )
}

export default Cart
