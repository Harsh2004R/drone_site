import React from 'react'

import { Box } from "@chakra-ui/react";

function Signup() {
  return (
    <>
      <Box
        w="100%" h="100vh"
        bg={`url("https://dji-official-fe.djicdn.com/cms/uploads/e64d421632de007395222eb0cce98fe7.jpg")`}
        bgSize="cover"
        bgPosition="center"
        position={"relative"}
      >

        <Box position={"absolute"}
          borderRadius={"lg"}
          w={{ base: "100%", md: "32%" }} h={{ base: "80vh", md: "95vh" }} bg="rgba(225,225,225,0.5)" top={{ base: "10%", md: "2.5%" }} left={{ base: "0", md: "33.9%" }}
        >

        </Box>

      </Box>
    </>
  )
}

export default Signup
