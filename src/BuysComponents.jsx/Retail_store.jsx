import React from 'react'
import { Text, Box, Divider, Select, Stack } from "@chakra-ui/react"
function Retail_store() {
    return (
        <div>
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
            <Box w={{ base: "98%", md: "96%", lg: "100%" }} m="auto" h={{ base: "5vh", md: "5vh", lg: "10vh" }} >

            </Box>
            <Box w={{ base: "98%", md: "96%", lg: "100%" }} m="auto" h="auto" >

            </Box>

        </div>
    )
}

export default Retail_store
