import React, { useState, useEffect } from 'react';
import { Box, Text, useBreakpointValue } from '@chakra-ui/react';
import { Link as ScrollLink, Element } from 'react-scroll';
import { motion } from 'framer-motion';





const ScrollableBox = ({ id, textContent, threshold }) => {
    const [showBox, setShowBox] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setShowBox(scrollPosition > threshold);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [threshold]);

    const renderContent = () => {
        if (id === "box1") {
            return (
                // Content for box1
                <Box height="60vh" bg="#000" >
                    <Text w={{ base: "95%", md: "70%" }} m="auto" fontSize={{ base: "23px", md: "30px" }} textAlign={"justify"} bgGradient="linear(to-l,rgb(172,172,172),rgb(226,226,226), rgb(122,122,122))" bgClip="text">
                        {textContent}
                    </Text>
                </Box>
            );
        } else if (id === "box2") {
            return (
                // Content for box2
                <Box height="100vh" bg="#000" >
                    <Text w={{ base: "95%", md: "70%" }} m="auto" fontSize={{ base: "14px", md: "23px" }} fontWeight={"500"} textAlign={"center"} bgGradient="linear(to-l,rgb(172,172,172),rgb(226,226,226), rgb(122,122,122))" bgClip="text">
                        Power and performance that defies common sense
                    </Text>
                </Box>
            );
        } else if (id === "box3") {
            return (
                // Content for box3
                <Text w={{ base: "95%", md: "70%" }} m="auto" fontSize={{ base: "23px", md: "30px" }} textAlign={"justify"} bgGradient="linear(to-l,rgb(172,172,172),rgb(226,226,226), rgb(122,122,122))" bgClip="text">Your custom content for bfwege ryerger gerhox2</Text>
            );
        }

    };


    return (
        <Element name={id}>
            <Box bg="#000" >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: showBox ? 1 : 0, y: showBox ? 0 : 20 }}
                    transition={{ duration: 0.8 }}
                    p={8}
                    bg="gray.800"
                    borderRadius="lg"
                    boxShadow="lg"
                >

                    {renderContent()}
                </motion.div>
            </Box>
        </Element>
    );
};

function IndustrialDesign() {
    const textContents = {
        box1: useBreakpointValue({
            base: "At the peak of aerial cinematography, DJI inspire 3 offers unprecedented, camera language, and creative freedom. This all-in-one 8k camera drone empowers professional-level filmmakers to fully maximize the potential of any short and master the unseen.", // For mobile devices
            md: "Nowadays, video production using aerial photography is gaining popularity, and DJI Inspire 3 boasts high work efficiency, enabling unprecedented video expression and a high degree of creativity.", // For tablets
            lg: "Nowadays, video production using aerial photography is gaining popularity, and DJI Inspire 3 boasts high work efficiency, enabling unprecedented video expression and a high degree of creativity.This all-in-one 8K camera drone allows professional filmmakers to unleash their full potential in every shoot, bringing the unknown into sharp focus.", // For desktops
        }),
        box2: useBreakpointValue({
            base: "Power and performance that defies common sense", // For mobile devices
            md: "Power and performance that defies common sense", // For tablets
            lg: "Power and performance that defies common sense", // For desktops
        }),
        box3: useBreakpointValue({
            base: "At the peak of aerial cinematography, DJI inspire 3 offers unprecedented, camera language, and creative freedom. This all-in-one 8k camera drone empowers professional-level filmmakers to fully maximize the potential of any short and master the unseen.", // For mobile devices
            md: "Nowadays, video production using aerial photography is gaining popularity, and DJI Inspire 3 boasts high work efficiency, enabling unprecedented video expression and a high degree of creativity.", // For tablets
            lg: "Nowadays, video production using aerial photography is gaining popularity, and DJI Inspire 3 boasts high work efficiency, enabling unprecedented video expression and a high degree of creativity.This all-in-one 8K camera drone allows professional filmmakers to unleash their full potential in every shoot, bringing the unknown into sharp focus.", // For desktops
        }),
        // Add more 😉
    };
    const thresholds = {
        box1: 1000,
        box2: 1600,
        box3: 1900,
        // Add more thresholds as needed
    };

    return (
        <>
            <ScrollableBox id="box1" textContent={textContents.box1} threshold={thresholds.box1} />
            <ScrollableBox id="box2" textContent={textContents.box2} threshold={thresholds.box2} />
            <ScrollableBox id="box3" textContent={textContents.box3} threshold={thresholds.box3} />

        </>
    );
}

export default IndustrialDesign;











// adding a dummy comment