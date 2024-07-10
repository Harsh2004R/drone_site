import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from "../Components/Footer.jsx"
import Navbar from '../Components/Navbar';
import { Box, Center, Flex, Heading, Text, Image, ButtonGroup, Button, IconButton, Spinner } from '@chakra-ui/react';
import { AddIcon, DeleteIcon, MinusIcon } from '@chakra-ui/icons';
import axios from 'axios';



const Cart = () => {

    const BASE_URL = "http://192.168.111.120:4000/"
    const [cartItems, setCartItems] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()
    useEffect(() => {
        // Fetch cart items from local storage
        const Zustand_state = localStorage.getItem("cart-items");
        const parsedState = JSON.parse(Zustand_state);
        const cartItems = parsedState.state.cart;

        // Transform the cart items into the desired format
        const cartArray = Object.keys(cartItems).map(productID => {
            return {
                product_id: productID,
                quantity: cartItems[productID]
            }
        });

        setCartItems(cartArray);

        // Fetch product details
        const fetchProductDetails = async () => {
            try {
                const productDetails = await Promise.all(
                    cartArray.map(async (item) => {
                        const response = await axios.get(`${BASE_URL}api/cart/${item.product_id}`);
                        return { ...response.data.cart, quantity: item.quantity };
                    })
                );
                setProducts(productDetails);
                setLoading(false);


            } catch (error) {
                console.error("Error fetching product details:", error);
                setLoading(false);
            }
        };

        fetchProductDetails();


    }, []);
    useEffect(() => {

    }, [products])

    const handleIncrement = (productID) => {
        navigate(`/cart`)
        const updatedCartItems = cartItems.map(item => {
            if (item.product_id === productID) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        setCartItems(updatedCartItems);
        updateLocalStorage(updatedCartItems);
    };

    const handleDecrement = (productID) => {
        const updatedCartItems = cartItems.map(item => {
            if (item.product_id === productID && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });
        setCartItems(updatedCartItems);
        updateLocalStorage(updatedCartItems);

    };

    const handleRemoveItem = (productID) => {
        const updatedCartItems = cartItems.filter(item => item.product_id !== productID);
        setCartItems(updatedCartItems);
        updateLocalStorage(updatedCartItems);


    }
    const updateLocalStorage = (updatedCartItems) => {
        const updatedState = {
            state: {
                cart: updatedCartItems.reduce((acc, item) => {
                    acc[item.product_id] = item.quantity;
                    return acc;
                }, {})
            }
        };
        localStorage.setItem("cart-items", JSON.stringify(updatedState));
        handleFetchAgain()
    };





    // This function will update UI also display latest || updated data...
    const handleFetchAgain = async () => {
        const Zustand_state = localStorage.getItem("cart-items");
        const parsedState = JSON.parse(Zustand_state);
        const cartItems = parsedState.state.cart;

        // Transform the cart items into the desired format
        const cartArray = Object.keys(cartItems).map(productID => {
            return {
                product_id: productID,
                quantity: cartItems[productID]
            }
        });

        setCartItems(cartArray);
        try {
            const productDetails = await Promise.all(
                cartArray.map(async (item) => {
                    const response = await axios.get(`${BASE_URL}api/cart/${item.product_id}`);
                    return { ...response.data.cart, quantity: item.quantity };
                })
            );
            setProducts(productDetails);
            setLoading(false);


        } catch (error) {
            console.error("Error fetching product details:", error);
            setLoading(false);
        }
        // console.log("new function called")
    }



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
            <Box w="100%" h="auto" >
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

                    {loading ? (

                        <Center display={"flex"} flexDirection={"column"} w="100%" h="10vh">
                            {/* <Spinner /> */}
                            <Text mt="10px" mb="20px" color="#000000" fontSize={{ base: "18px", md: "18px" }} fontWeight={"500"}>Please Wait it's loading...</Text>
                            <Spinner
                                thickness='4px'
                                speed='0.65s'
                                emptyColor='gray.200'
                                color='blue.500'
                                size='xl'
                            />
                        </Center>
                    ) : (
                        products.map((el, i) => (
                            <Box key={i} mt={{ base: "5", md: "5" }} w="100%" h={{ base: "auto", md: "auto" }} borderRadius={"lg"} transition="0.2s ease" _hover={{ transition: "0.2s ease", cursor: "pointer", border: "3px solid #53a3ef" }}>

                                <Box transition={"0.3s ease"} p={{ base: '2', md: "5" }} display="flex" flexDirection="row" w="100%" h="100%">
                                    <Box display={"flex"} justifyContent={"center"} alignContent={"center"} alignItems={"center"} w={{ base: "100px", md: "150px" }} h="auto">
                                        <Image pl={2} pr={2} w="100%" h={{ base: "80px", md: "120px" }} src={el.cover_img} alt="drone.png" />
                                    </Box>
                                    <Box w={{ base: "50%", md: "45%" }} display={"flex"} flexDirection={"column"} justifyContent={"center"} h={{ base: "auto", md: "auto" }}>
                                        <Text fontWeight={"500"} fontSize={{ base: "14px", md: "18px" }}>{"DJI Mini 4 Pro (DJI RC-N2)"}</Text>
                                        <Text fontWeight={"500"} fontSize={{ base: "12px", md: "14px" }} display={{ base: "block", md: "none" }}>USD $<Text color="#30a4e5" as="span">{el.price}</Text></Text>
                                        <Text fontWeight={"500"} color="#30a4e5" display={{ base: "block", md: "none" }} fontSize={{ base: "10px", md: "12px" }} onClick={() => handleRemoveItem(el._id)}>Remove</Text>

                                    </Box>
                                    <Center justifyContent={"space-evenly"} w={{ base: "50%", md: "50%" }} flex={1} h="auto" >
                                        <Text display={{ base: "none", md: "block" }} fontSize={{ base: "16px", md: "16px" }} color="#6C7073">
                                            USD ${el.price}
                                        </Text>
                                        <ButtonGroup size='sm' isAttached variant='outline'>
                                            <IconButton onClick={() => handleDecrement(el._id)} _hover={{ color: "blue" }} aria-label='dicreament' icon={<MinusIcon />} />
                                            <Center pl="3" pr="3" borderTop={"1px solid #e8e8e8"} borderBottom={"1px solid #e8e8e8"}><Text color="#6C7073">{el.quantity}</Text></Center>
                                            <IconButton onClick={() => handleIncrement(el._id)} _hover={{ color: "blue" }} aria-label='increament' icon={<AddIcon />} />
                                        </ButtonGroup>
                                        <Text display={{ base: "none", md: "block" }} fontWeight={'500'} fontSize={{ base: "16px", md: "16px" }} color="#000000">
                                            USD ${el.price*el.quantity}
                                        </Text>
                                        <IconButton onClick={() => handleRemoveItem(el._id)} display={{ base: "none", md: "block" }} ml="2" mr="2" bg="transparent" transition={"0s ease"} _hover={{ color: "#f22847", borderRadius: "50%", bg: "#dadada" }} aria-label='Add to friends' icon={<DeleteIcon />} />
                                    </Center>

                                </Box>

                            </Box>
                        ))
                    )}







                </Box>
            </Box>

            <Footer />

        </>
    )
}

export default Cart
