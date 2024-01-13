import React, { useState, useEffect } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { Link as ScrollLink, Element } from 'react-scroll';
import { motion } from 'framer-motion';

const ProductSpecsSection = () => {
  const [showProductSpecs, setShowProductSpecs] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const showThreshold = 200; // Adjust this threshold as needed

      setShowProductSpecs(scrollPosition > showThreshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Element name="productSpecs" />
      <Box height="200vh" display="flex" alignItems="center" justifyContent="center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showProductSpecs ? 1 : 0, y: showProductSpecs ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          p={8}
          bg="gray.800"
          borderRadius="lg"
          boxShadow="lg"
        >
          <Text fontSize="2xl" mb={4}>
            Product Specifications
          </Text>
          <Text fontSize="lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis
            ornare vel eu leo.
          </Text>
        </motion.div>
      </Box>
    </>
  );
};

export default ProductSpecsSection;
