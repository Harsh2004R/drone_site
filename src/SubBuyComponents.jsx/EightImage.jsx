import React from 'react'
import { Text, Box, Image, Grid } from "@chakra-ui/react";



const Images = [
    { img_url: "https://dji-official-fe.djicdn.com/dps/3b7953435e791d6a56253d87584e34cf.png", name: "Dji Mavic" },
    { img_url: "https://dji-official-fe.djicdn.com/dps/77738ff32f7a228fc58b4f401261e481.png", name: "Dji Air" },
    { img_url: "https://dji-official-fe.djicdn.com/dps/5698cb42a9a1fdce69e22f30550d9767.png", name: "Dji Mini" },
    { img_url: "https://dji-official-fe.djicdn.com/dps/97e1b5ab20211e739898969647666de1.png", name: "Dji Avata2" },
    { img_url: "https://dji-official-fe.djicdn.com/dps/d13ba498aecd93533f69bcd1500458af.png", name: "Dji Inspire2" },
    { img_url: "https://dji-official-fe.djicdn.com/dps/445acaa272ac55184d736f9518c50b3c.png", name: "Dji FPV" },
    { img_url: "https://dji-official-fe.djicdn.com/dps/b429552c65fa90e612204031c752b2e0.png", name: "RC" },
    { img_url: "https://dji-official-fe.djicdn.com/dps/f14c7c1d91574014937b8f52e8226e1a.png", name: "Dji Power" },
]



function EightImage() {

    return (
        <div>
            <Box w="100%" h={{ base: "21.5vh", md: "20vh" }} bg="#F5F5F5">

                <Box w={{ base: "100%", md: "80%" }} m="auto" h="100%" bg="#" style={{ overflow: "hidden" }}>
                    {/* Render images based on currentIndex */}
                    <Grid templateColumns={{ base: 'repeat(4, 1fr)', md: 'repeat(8, 1fr)' }} gap={1}>
                        <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignContent={"center"} w='100%' h={{ base: "10vh", md: "95%" }}   >
                            <Image m="auto" src="https://dji-official-fe.djicdn.com/dps/3b7953435e791d6a56253d87584e34cf.png" w="80%" h="80%" alt="mini_drones" />
                            <Text _hover={{ textColor: "#26b0ee", cursor: "pointer" }} fontSize={{ base: "xs", md: "sm" }} textAlign={"center"}>Dji Mavic</Text>
                        </Box>
                        <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignContent={"center"} w='100%' h={{ base: "10vh", md: "95%" }}   >
                            <Image m="auto" src="https://dji-official-fe.djicdn.com/dps/77738ff32f7a228fc58b4f401261e481.png" w="80%" h="80%" alt="mini_drones" />
                            <Text _hover={{ textColor: "#26b0ee", cursor: "pointer" }} fontSize={{ base: "xs", md: "sm" }} textAlign={"center"}>Dji Air</Text>
                        </Box>
                        <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignContent={"center"} w='100%' h={{ base: "10vh", md: "95%" }}   >
                            <Image m="auto" src="https://dji-official-fe.djicdn.com/dps/5698cb42a9a1fdce69e22f30550d9767.png" w="80%" h="80%" alt="mini_drones" />
                            <Text _hover={{ textColor: "#26b0ee", cursor: "pointer" }} fontSize={{ base: "xs", md: "sm" }} textAlign={"center"}>Dji Mini</Text>
                        </Box>
                        <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignContent={"center"} w='100%' h={{ base: "10vh", md: "95%" }}   >
                            <Image m="auto" src="https://dji-official-fe.djicdn.com/dps/97e1b5ab20211e739898969647666de1.png" w="80%" h="80%" alt="mini_drones" />
                            <Text _hover={{ textColor: "#26b0ee", cursor: "pointer" }} fontSize={{ base: "xs", md: "sm" }} textAlign={"center"}>Dji Avata2</Text>
                        </Box>
                        <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignContent={"center"} w='100%' h={{ base: "10vh", md: "95%" }}   >
                            <Image m="auto" src="https://dji-official-fe.djicdn.com/dps/d13ba498aecd93533f69bcd1500458af.png" w="80%" h="80%" alt="mini_drones" />
                            <Text _hover={{ textColor: "#26b0ee", cursor: "pointer" }} fontSize={{ base: "xs", md: "sm" }} textAlign={"center"}>Dji Inspire2</Text>
                        </Box>
                        <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignContent={"center"} w='100%' h={{ base: "10vh", md: "95%" }}   >
                            <Image m="auto" src="https://dji-official-fe.djicdn.com/dps/445acaa272ac55184d736f9518c50b3c.png" w="80%" h="80%" alt="mini_drones" />
                            <Text _hover={{ textColor: "#26b0ee", cursor: "pointer" }} fontSize={{ base: "xs", md: "sm" }} textAlign={"center"}>Dji FPV</Text>
                        </Box>
                        <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignContent={"center"} w='100%' h={{ base: "10vh", md: "95%" }}   >
                            <Image m="auto" src="https://dji-official-fe.djicdn.com/dps/b429552c65fa90e612204031c752b2e0.png" w="80%" h="80%" alt="mini_drones" />
                            <Text _hover={{ textColor: "#26b0ee", cursor: "pointer" }} fontSize={{ base: "xs", md: "sm" }} textAlign={"center"}>RC</Text>
                        </Box>
                        <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignContent={"center"} w='100%' h={{ base: "10vh", md: "95%" }}   >
                            <Image m="auto" src="https://dji-official-fe.djicdn.com/dps/f14c7c1d91574014937b8f52e8226e1a.png" w="80%" h="80%" alt="mini_drones" />
                            <Text _hover={{ textColor: "#26b0ee", cursor: "pointer" }} fontSize={{ base: "xs", md: "sm" }} textAlign={"center"}>Dji Power</Text>
                        </Box>

                    </Grid>

                </Box>

            </Box>
        </div>
    )
}

export default EightImage
