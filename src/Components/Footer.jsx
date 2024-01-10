// working date 30 dec 2k23............S
import React from 'react'
import { Box, Grid, Image, Text, Input, Divider } from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons';
function Footer() {
    return (
        <>
            <Box w="100%" h="auto"
            // border={"5px solid #000"}
            >
                {/* WHERE TO BUY SUPPORT AND FLY SAFE container starting from here*/}
                <Box w="100%" h="45vh" bg="#f7f9fa">
                    <Box m="auto" w="80%" h="100%" >

                        <Grid h="45vh" templateColumns={{ base: "repeat(1, 1fr)", md: 'repeat(3, 1fr)' }} gap={4}>

                            <Box m="auto" w="250px" h="25vh" >
                                <Box display={"flex"} justifyContent={"center"} alignContent={"center"} alignItems={"center"} flexDirection={"column"}>
                                    <Image src="https://www1.djicdn.com/cms/uploads/94964ecb1bc4c100c42c93a814bd4733.svg" w="78px" h={"78px"} alt="svg1" />
                                    <Text marginTop={"10px"} fontWeight={"500"} fontSize={{ base: "xl", md: "2xl" }}>Where to Buy</Text>
                                    <Text>Learn More </Text>
                                </Box>
                            </Box>
                            <Box m="auto" w="250px" h="25vh" >
                                <Box display={"flex"} justifyContent={"center"} alignContent={"center"} alignItems={"center"} flexDirection={"column"}>
                                    <Image src="https://www1.djicdn.com/cms/uploads/60ff58dae8a3fffc6a6e292ce587ca46.svg" w="78px" h={"78px"} alt="svg2" />
                                    <Text marginTop={"10px"} fontWeight={"500"} fontSize={{ base: "xl", md: "2xl" }}>Support</Text>
                                    <Text>Learn More </Text>
                                </Box>
                            </Box>
                            <Box m="auto" w="250px" h="25vh" >
                                <Box display={"flex"} justifyContent={"center"} alignContent={"center"} alignItems={"center"} flexDirection={"column"}>
                                    <Image src="https://www1.djicdn.com/cms/uploads/e5878a0a23f0c8b05878dac1e0293dfd.svg" m="auto" w="78px" h={"78px"} alt="svg3" />
                                    <Text marginTop={"10px"} fontWeight={"500"} fontSize={{ base: "xl", md: "2xl" }}>Fly Safe</Text>
                                    <Text >Learn More </Text>

                                </Box>
                            </Box>
                        </Grid>
                    </Box>

                </Box>
                {/* WHERE TO BUY SUPPORT AND FLY SAFE container ends here*/}



                {/* Main Footer Container starting from here>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
                <Box w="100%" h="90vh" bg="#272727">



                    <Grid h="70%" w="80%" m="auto" templateColumns={{ base: "repeat(1, 1fr)", md: 'repeat(5, 1fr)' }} >


                        <Box w="100%" h="auto" mt='10%' >
                            <Text color="#fff" fontSize={{ base: "14px", md: "12px" }} fontWeight={"500"}>Product Categories</Text>

                            <Text color="rgba(255,255,255,.75)" mt="10px" fontSize={{ base: "14px", md: "12px" }} >Consumer</Text>
                            <Text color="rgba(255,255,255,.75)" mt="10px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"400"}>Professional</Text>
                            <Text color="rgba(255,255,255,.75)" mt="10px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"400"}>Enterprise</Text>
                            <Text color="rgba(255,255,255,.75)" mt="10px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"400"}>Components</Text>

                            <Text color="rgba(255,255,255)" mt="30px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"500"}>Service Plans</Text>
                            <Text color="rgba(255,255,255,.75)" mt="10px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"400"}>DJI Care Refresh</Text>
                            <Text color="rgba(255,255,255,.75)" mt="10px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"400"}>DJI Care Pro</Text>
                            <Text color="rgba(255,255,255,.75)" mt="10px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"400"}>DJI Care Enterprise</Text>
                            <Text color="rgba(255,255,255,.75)" mt="10px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"400"}>DJI Maintenance Program</Text>

                        </Box>
                        <Box w="100%" h="auto" mt='10%' >
                            <Text color="#fff" fontSize={{ base: "14px", md: "12px" }} fontWeight={"500"}>Where to Buy</Text>
                            <Text color="rgba(255,255,255,.75)" mt="10px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"400"}>DJI Online Store</Text>
                            <Text color="rgba(255,255,255,.75)" mt="10px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"400"}>Flagship Stores</Text>
                            <Text color="rgba(255,255,255,.75)" mt="10px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"400"}>DJI-Operated Stores</Text>
                            <Text color="rgba(255,255,255,.75)" mt="10px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"400"}>Retail Stores</Text>
                            <Text color="rgba(255,255,255,.75)" mt="10px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"400"}>Enterprise Retailers</Text>
                            <Text color="rgba(255,255,255,.75)" mt="10px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"400"}>Agricultural Drone Dealer</Text>
                            <Text color="rgba(255,255,255,.75)" mt="10px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"400"}>Pro Retailers</Text>
                            <Text color="rgba(255,255,255,.75)" mt="10px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"400"}>DJI Store App</Text>
                            <Text color="rgba(255,255,255)" mt="30px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"500"}>Cooperation</Text>
                            <Text color="rgba(255,255,255,.75)" mt="10px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"400"}>Become a Dealer</Text>
                            <Text color="rgba(255,255,255,.75)" mt="10px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"400"}>Apply For Authorized Store</Text>

                        </Box>
                        <Box w="100%" h="auto" mt='10%'>
                            <Text color="#fff" fontSize={{ base: "14px", md: "12px" }} fontWeight={"500"}>Fly Safe</Text>
                            <Text color="rgba(255,255,255,.75)" mt="10px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"400"}>Fly Safe</Text>
                            <Text color="rgba(255,255,255,.75)" mt="10px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"400"}>DJI Flying Tips</Text>
                            <Text color="rgba(255,255,255)" mt="30px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"500"}>Support</Text>


                            <Text color="rgba(255,255,255,.75)" mt="10px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"400"}>Product Support</Text>
                            <Text color="rgba(255,255,255,.75)" mt="10px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"400"}>Service Request and Inquiry</Text>
                            <Text color="rgba(255,255,255,.75)" mt="10px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"400"}>Help Center</Text>
                            <Text color="rgba(255,255,255,.75)" mt="10px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"400"}>After-Sales Service Policies</Text>
                            <Text color="rgba(255,255,255,.75)" mt="10px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"400"}>Download Center</Text>
                            <Text color="rgba(255,255,255,.75)" mt="10px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"400"}>Security and Privacy</Text>
                        </Box>
                        <Box w="100%" h="auto" mt='10%'>
                            <Text color="#fff" fontSize={{ base: "14px", md: "12px" }} fontWeight={"500"}>Explore</Text>


                            <Text color="rgba(255,255,255,.75)" mt="10px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"400"}>Newsroom</Text>
                            <Text color="rgba(255,255,255,.75)" mt="10px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"400"}>Buying Guides</Text>
                            <Text color="rgba(255,255,255,.75)" mt="10px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"400"}>STEAM Education</Text>

                        </Box>

                        <Box w="100%" h="auto" mt='10%' >
                            <Text color="#fff" fontSize={{ base: "14px", md: "12px" }} fontWeight={"500"}>Community</Text>
                            <Text color="rgba(255,255,255,.75)" mt="10px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"400"}></Text>



                            <Text color="rgba(255,255,255,.75)" mt="10px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"400"}>SkyPixel</Text>
                            <Text color="rgba(255,255,255,.75)" mt="10px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"400"}>DJI Forum</Text>
                            <Text color="rgba(255,255,255,.75)" mt="10px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"400"}>Developer</Text>
                            <Text color="rgba(255,255,255)" mt="30px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"500"}>Subscribe</Text>


                            <Text color="rgba(255,255,255,.75)" mt="10px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"400"}>Get the latest news from DJI</Text>
                            <Box w="100%" display={"flex"} h="auto" justifyContent={"center"} alignContent={"center"} alignItems={"center"}>
                                <Input placeholder='Your email address' size='xs' /><Box w="30px" h="50px" display={"flex"} justifyContent={"center"} alignContent={"center"} alignItems={"center"}><EmailIcon m="auto" color="#fff" /></Box>

                            </Box>

                        </Box>




                    </Grid >




                    <Grid h="30%" w="80%" m="auto" border={"1px solid teal"} templateColumns={{ base: "repeat(1, 1fr)", md: 'repeat(1, 1fr)' }} >

                        <Box w="100%" h="7vh" border={"1px solid lime"} >
                            {/* <Divider /> */}

                            <Grid  h="100%" templateColumns={{ base: "repeat(2, 1fr)", md: 'repeat(2, 1fr)' }} gap={1}>

                                <Box w="100%" h="100%" >

                                    {/* <Box w="50px"  border={"1px solid lime"}>
                                        <Image w="100%"  src="https://www1.djicdn.com/dps/176201ad61d0753e17d860c4ca117932.svg" alt="" />
                                    </Box> */}

                                </Box>
                                <Box w="100%" h="100%" bg="coral">

                                </Box>

                            </Grid>

                        </Box>

                    </Grid>


                </Box >






            </Box >
        </>
    )
}

export default Footer







