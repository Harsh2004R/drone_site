import React from 'react';
import Navbar from "../Components/Navbar.jsx";
import Footer from '../Components/Footer'
import { Text, Box, Divider } from "@chakra-ui/react"
function BuyPage() {
  return (
    <div>

      <Navbar />
      <Box w={{ base: "100%", md: "80%" }} m="auto" border={"1px solid cyan"} h={{ base: "120vh", md: "150vh" }}>

        <Text color="#999" fontSize={{ base: "xs", md: "13px", lg: "12.8px" }}>Home / Where To Buy / Retail Stores</Text>
        <Text mt={{ base: "10px", md: "15px", lg: "20px" }} fontWeight={"500"} color="#000" fontSize={{ base: "2xl", md: "20px", lg: "32.8px" }}>Where To Buy</Text>
        <Divider />



        <Box>

        </Box>
        <Box>

        </Box>

      </Box>

      <Footer />

    </div>
  )
}

export default BuyPage
