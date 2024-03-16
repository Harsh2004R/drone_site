import React from 'react';
import Navbar from "../Components/Navbar.jsx";
import Footer from '../Components/Footer'
import { Text, Box, Divider, Select, Stack } from "@chakra-ui/react"
function BuyPage() {
  return (
    <div>

      <Navbar />
      <Box w={{ base: "100%", md: "80%" }} m="auto" h={{ base: "120vh", md: "150vh" }}>

        <Text w={{base:"90%",md:"90%",lg:"100%"}} m="auto" color="#999" fontSize={{ base: "xs", md: "13px", lg: "12.8px" }}>Home / Where To Buy / Retail Stores</Text>
        <Text w={{base:"90%",md:"90%",lg:"100%"}} m="auto" mt={{ base: "10px", md: "15px", lg: "20px" }} fontWeight={"500"} color="#000" fontSize={{ base: "2xl", md: "20px", lg: "32.8px" }}>Where To Buy</Text>
        <Divider />



        {/* Where To Buy Options part here----------------->>> */}
        <Box display={"flex"} alignContent={"center"} alignItems={"center"} justifyContent={"center"} m="auto" w={{base:"90%",md:"90%",lg:"100%"}} h={{ base: "10vh", md: "15vh", lg: "15vh" }} borderTop="1px solid #CFD8DC" borderBottom="1px solid #CFD8DC" >
          <Box display={"flex"} alignContent={"left"} gap={"20px"} alignItems={"center"} justifyContent={"left"} w="100%" h={{ base: "40%", md: "35%", lg: "33%" }}
          // border={"1px solid red"}
          >
            <Box _hover={{ bg: "#000", textColor: "#fff" }} display={"flex"} alignContent={"center"} alignItems={"center"} justifyContent={"center"} w="auto" h="100%" borderTopRightRadius={"15px"} borderTopLeftRadius={"15px"} borderBottomRightRadius={"15px"} borderBottomLeftRadius={"15px"}>
              <Text ml={"4px"} mr="4px" fontSize={{ base: "10px", md: "12px", lg: "12px" }}>Official Online store</Text>
            </Box>
            <Box _hover={{ bg: "#000", textColor: "#fff" }} display={"flex"} alignContent={"center"} alignItems={"center"} justifyContent={"center"} w="auto" h="100%" borderTopRightRadius={"15px"} borderTopLeftRadius={"15px"} borderBottomRightRadius={"15px"} borderBottomLeftRadius={"15px"}>
              <Text ml={"4px"} mr="4px" fontSize={{ base: "10px", md: "12px", lg: "12px" }}>Retail store</Text>
            </Box>
          </Box>
        </Box>
        {/* Where To Buy Options part ends here----------------->>> */}


        {/* all select tag part starting here------>>> */}
        <Box w="100%" h="20px" ></Box>

        <Box w={{ base: "100%", md: "100%", lg: "80%" }} h="auto">
          <Stack direction={['column', 'row']} spacing='24px'>

            <Select required={true} pr={{ base: "12px", md: "0px" }} pl={{ base: "12px", md: "0px" }} fontSize={"13px"} placeholder='Continent *' size='md' >
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </Select>


            <Select required={true} pr={{ base: "12px", md: "0px" }} pl={{ base: "12px", md: "0px" }} fontSize={"13px"} placeholder='Regions *' size='md' >
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </Select>


            <Select required={true} pr={{ base: "12px", md: "0px" }} pl={{ base: "12px", md: "0px" }} fontSize={"13px"} placeholder='State' size='md' >
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </Select>


            <Select required={true} pr={{ base: "12px", md: "0px" }} pl={{ base: "12px", md: "0px" }} placeholder='Search by zip code' fontSize={"13px"} size='md' >
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </Select>

          </Stack>
        </Box>

        {/* all select tag part ending here------>>> */}


        <Box w={{ base: "98%", md: "96%", lg: "100%" }} m="auto" h={{ base: "5vh", md: "5vh", lg: "10vh" }} >

        </Box>
        <Box w={{ base: "98%", md: "96%", lg: "100%" }} m="auto" h="auto" >

        </Box>

      </Box>

      <Footer />

    </div>
  )
}

export default BuyPage
