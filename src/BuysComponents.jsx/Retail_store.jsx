import React, { useState, useEffect, useRef } from 'react'
import {
    Text, Box, useDisclosure,
    MenuItem,
    Menu,
    MenuButton,
    MenuList,
    Radio,
} from "@chakra-ui/react"
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
function Retail_store() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleToggle = () => {
        if (isOpen == false) {

            onOpen()
        } else {
            onClose()
        }
    }
    return (
        <div>
            <Box
                //  border={"1px solid red"} 
                display={"flex"} position={"relative"} w={{ base: "100%", md: "100%", lg: "100%" }} h="100vh" >


                <Box
                    border={"1px solid yellow"}
                    position={"sticky"} w={{ base: "30%", md: "40%", lg: "25%" }} h="100vh" >

                    <Text fontSize={{ base: "22px", md: "22px", lg: "22px" }} color="#3e403f" fontWeight={"500"} mt={2}>Filter</Text>
                    <Text fontSize={{ base: "12px", md: "15px", lg: "15px" }} color="#3e403f" fontWeight={"600"} mt={1}>Product Series</Text>
                   
                   
                   
                   
                   
                   
                   
                   
                    <Menu isOpen={isOpen}>
                        <Box   _hover={{ textColor: "#0693e3"}} mt={5} display={"flex"} onClick={handleToggle} justifyContent={"space-between"} border={"1px solid lime"}>
                            <Box>
                                <MenuButton
                                    variant="unstyled"
                                    px={0}
                                    aria-label="Courses"
                                    fontWeight="normal"
                                // onMouseEnter={onOpen}
                                // onMouseLeave={onClose}
                                >
                                    DJI Mavic
                                </MenuButton>
                            </Box>

                            <Box>{isOpen ? <ChevronUpIcon /> : <ChevronDownIcon marginRight="auto" />}</Box>
                        </Box>
                        <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
                            <MenuItem><Radio m="5px"></Radio>Menu Item 1</MenuItem>
                            <MenuItem><Radio m="5px"></Radio>Menu Item 2</MenuItem>
                            <MenuItem><Radio m="5px"></Radio>Menu Item 3</MenuItem>
                        </MenuList>
                    </Menu>
 
                    <Menu isOpen={isOpen}>
                        <Box   _hover={{ textColor: "#0693e3"}} mt={5} display={"flex"} onClick={handleToggle} justifyContent={"space-between"} border={"1px solid lime"}>
                            <Box>
                                <MenuButton
                                    variant="unstyled"
                                    px={0}
                                    aria-label="Courses"
                                    fontWeight="normal"
                                // onMouseEnter={onOpen}
                                // onMouseLeave={onClose}
                                >
                                    DJI Mavic
                                </MenuButton>
                            </Box>

                            <Box>{isOpen ? <ChevronUpIcon /> : <ChevronDownIcon marginRight="auto" />}</Box>
                        </Box>
                        <MenuList  onMouseEnter={onOpen} onMouseLeave={onClose}>
                            <MenuItem><Radio m="5px"></Radio>Menu Item 1</MenuItem>
                            <MenuItem><Radio m="5px"></Radio>Menu Item 2</MenuItem>
                            <MenuItem><Radio m="5px"></Radio>Menu Item 3</MenuItem>
                        </MenuList>
                    </Menu>

                     
                    <Menu isOpen={isOpen}>
                        <Box   _hover={{ textColor: "#0693e3"}} mt={5} display={"flex"} onClick={handleToggle} justifyContent={"space-between"} border={"1px solid lime"}>
                            <Box>
                                <MenuButton
                                    variant="unstyled"
                                    px={0}
                                    aria-label="Courses"
                                    fontWeight="normal"
                                // onMouseEnter={onOpen}
                                // onMouseLeave={onClose}
                                >
                                    DJI Mavic
                                </MenuButton>
                            </Box>

                            <Box>{isOpen ? <ChevronUpIcon /> : <ChevronDownIcon marginRight="auto" />}</Box>
                        </Box>
                        <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
                            <MenuItem><Radio m="5px"></Radio>Menu Item 1</MenuItem>
                            <MenuItem><Radio m="5px"></Radio>Menu Item 2</MenuItem>
                            <MenuItem><Radio m="5px"></Radio>Menu Item 3</MenuItem>
                        </MenuList>
                    </Menu>
























                </Box>

                <Box
                    // border={"1px solid yellow"}
                    w={{ base: "70%", md: "60%", lg: "75%" }} overflow={"auto"} h="100vh" css={{ scrollbarWidth: "none", msOverflowStyle: "none" }} _webkit={{ overflowScrolling: "touch", "&::-webkit-scrollbar": { display: "none" } }}>
                    <Box w="100%" h="auto" overflowY="hidden"
                    // border={"1px solid lime"} 
                    >
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente quasi, quaerat aut sit illo omnis laboriosam cumque dolorem rerum, corporis laudantium consequatur distinctio voluptatum cum qui quam praesentium eius maiores impedit quod id sequi deserunt! Vero sit alias est quos iure praesentium quam, corrupti culpa nesciunt itaque nulla atque saepe consequuntur natus non deleniti dolor officia vel tenetur. Facere harum, quia alias necessitatibus eos doloribus at officiis sequi excepturi ex quos eum quam distinctio qui molestias sapiente vel eius consequuntur recusandae nam soluta ducimus placeat atque iusto! Amet ipsa omnis voluptate, dolores, enim assumenda ratione cupiditate molestias eligendi temporibus est.</p>

                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente quasi, quaerat aut sit illo omnis laboriosam cumque dolorem rerum, corporis laudantium consequatur distinctio voluptatum cum qui quam praesentium eius maiores impedit quod id sequi deserunt! Vero sit alias est quos iure praesentium quam, corrupti culpa nesciunt itaque nulla atque saepe consequuntur natus non deleniti dolor officia vel tenetur. Facere harum, quia alias necessitatibus eos doloribus at officiis sequi excepturi ex quos eum quam distinctio qui molestias sapiente vel eius consequuntur recusandae nam soluta ducimus placeat atque iusto! Amet ipsa omnis voluptate, dolores, enim assumenda ratione cupiditate molestias eligendi temporibus est.</p>

                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente quasi, quaerat aut sit illo omnis laboriosam cumque dolorem rerum, corporis laudantium consequatur distinctio voluptatum cum qui quam praesentium eius maiores impedit quod id sequi deserunt! Vero sit alias est quos iure praesentium quam, corrupti culpa nesciunt itaque nulla atque saepe consequuntur natus non deleniti dolor officia vel tenetur. Facere harum, quia alias necessitatibus eos doloribus at officiis sequi excepturi ex quos eum quam distinctio qui molestias sapiente vel eius consequuntur recusandae nam soluta ducimus placeat atque iusto! Amet ipsa omnis voluptate, dolores, enim assumenda ratione cupiditate molestias eligendi temporibus est.</p>

                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente quasi, quaerat aut sit illo omnis laboriosam cumque dolorem rerum, corporis laudantium consequatur distinctio voluptatum cum qui quam praesentium eius maiores impedit quod id sequi deserunt! Vero sit alias est quos iure praesentium quam, corrupti culpa nesciunt itaque nulla atque saepe consequuntur natus non deleniti dolor officia vel tenetur. Facere harum, quia alias necessitatibus eos doloribus at officiis sequi excepturi ex quos eum quam distinctio qui molestias sapiente vel eius consequuntur recusandae nam soluta ducimus placeat atque iusto! Amet ipsa omnis voluptate, dolores, enim assumenda ratione cupiditate molestias eligendi temporibus est.</p>

                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente quasi, quaerat aut sit illo omnis laboriosam cumque dolorem rerum, corporis laudantium consequatur distinctio voluptatum cum qui quam praesentium eius maiores impedit quod id sequi deserunt! Vero sit alias est quos iure praesentium quam, corrupti culpa nesciunt itaque nulla atque saepe consequuntur natus non deleniti dolor officia vel tenetur. Facere harum, quia alias necessitatibus eos doloribus at officiis sequi excepturi ex quos eum quam distinctio qui molestias sapiente vel eius consequuntur recusandae nam soluta ducimus placeat atque iusto! Amet ipsa omnis voluptate, dolores, enim assumenda ratione cupiditate molestias eligendi temporibus est.</p>

                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente quasi, quaerat aut sit illo omnis laboriosam cumque dolorem rerum, corporis laudantium consequatur distinctio voluptatum cum qui quam praesentium eius maiores impedit quod id sequi deserunt! Vero sit alias est quos iure praesentium quam, corrupti culpa nesciunt itaque nulla atque saepe consequuntur natus non deleniti dolor officia vel tenetur. Facere harum, quia alias necessitatibus eos doloribus at officiis sequi excepturi ex quos eum quam distinctio qui molestias sapiente vel eius consequuntur recusandae nam soluta ducimus placeat atque iusto! Amet ipsa omnis voluptate, dolores, enim assumenda ratione cupiditate molestias eligendi temporibus est.</p>




                    </Box>
                </Box>



            </Box>


        </div>
    )
}

export default Retail_store
