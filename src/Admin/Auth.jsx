import React, { useEffect, useState } from 'react'
'use client'

import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useColorModeValue,
    HStack,
    Avatar,
    AvatarBadge,
    IconButton,
    Center,
    Text,
} from '@chakra-ui/react'
import { SmallCloseIcon } from '@chakra-ui/icons'



export default function UserProfileEdit() {
    const [clicked, setClicked] = useState(false)
    const [loading, setLoading] = useState(false)
    const handleAuth = () => {

    }
    const toggleForms = () => {
        clicked ? setClicked(!true) : setClicked(true)
    }
    return (
        <Flex
            transition={"1s ease"}
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack
                spacing={4}
                w={'full'}
                maxW={'md'}
                bg={useColorModeValue('white', 'gray.700')}
                rounded={'xl'}
                boxShadow={'lg'}
                p={6}
                my={12}>
                <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
                    Admin {clicked ? "Sign up" : "Login"}
                </Heading>
                <FormControl id="userName">
                    <FormLabel></FormLabel>
                    <Stack direction={['column', 'row']} spacing={6}>
                        <Center>
                            <Avatar size="xl" src="https://bit.ly/sage-adebayo">
                                <AvatarBadge
                                    as={IconButton}
                                    size="sm"
                                    rounded="full"
                                    top="-10px"
                                    colorScheme="red"
                                    aria-label="remove Image"
                                    icon={<SmallCloseIcon />}
                                />
                            </Avatar>
                        </Center>

                    </Stack>
                </FormControl>
                {clicked ? (
                    <FormControl id="userName" isRequired>
                        <FormLabel>Admin's name</FormLabel>
                        <Input
                            placeholder="your name"
                            _placeholder={{ color: 'gray.500' }}
                            type="text"
                        />
                    </FormControl>
                ) : (
                    <></>
                )}

                <FormControl id="email" isRequired>
                    <FormLabel>Email address</FormLabel>
                    <Input
                        placeholder="your-email@example.com"
                        _placeholder={{ color: 'gray.500' }}
                        type="email"
                    />
                </FormControl>
                <FormControl id="password" isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input
                        placeholder="password"
                        _placeholder={{ color: 'gray.500' }}
                        type="password"
                    />
                </FormControl>
                <Text textAlign={"center"} fontSize={{ base: "14px", md: "14px" }}>
                    {clicked ? (
                        <>
                            <span>I already have an account</span> <Text as={"span"} _hover={{ cursor: "pointer", color: "blue.500" }} style={{ fontWeight: 'bold', color: "skyblue" }} onClick={toggleForms}>Log in </Text><span>here</span>
                        </>
                    ) : (
                        <>
                            <span>Don't have an account?</span> <Text as={"span"} _hover={{ cursor: "pointer", color: "blue.500" }} style={{ fontWeight: 'bold', color: "skyblue" }} onClick={toggleForms}>Sign up </Text><span>here</span>
                        </>
                    )}

                </Text>
                <Stack spacing={6} direction={['column', 'row']}>

                    <Button
                        bg={'red.400'}
                        color={'white'}
                        w="full"
                        _hover={{
                            bg: 'red.500',
                        }} onClick={handleAuth}
                        isDisabled={clicked}
                    >
                        Login
                    </Button>

                    <Button
                        bg={'blue.400'}
                        color={'white'}
                        w="full"
                        _hover={{
                            bg: 'blue.500',
                        }}
                        onClick={handleAuth}
                        isDisabled={!clicked}
                    >
                        Sign Up
                    </Button>
                </Stack>
            </Stack>
        </Flex>
    )
}