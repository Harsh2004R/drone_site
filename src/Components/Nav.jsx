
import React from 'react';
import { Box, Flex, Spacer, Button, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex p={4} border={"1px solid yellow"} w="100%" h={{base:"100vh",md:"70px"}} bgColor="teal.500" >
      <Box>
        <Button
          display={{ base: 'block', md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
          leftIcon={<HamburgerIcon />}
          variant="outline"
          ml={0}
        >
          menu
        </Button>
      </Box>

      <Spacer />

      <Box
        display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
        mt={{ base: 0, md: 0 }}
      >
        <Box  display={"flex"} flexDirection={{base:"column",md:"row"}} spacing={4}>
          <Button color="white" variant="ghost">
            Home
          </Button>
          <Button color="white" variant="ghost">
            About
          </Button>
          <Button color="white" variant="ghost">
            Services
          </Button>
          <Button color="white" variant="ghost">
            Contact
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};

export default Navbar;
