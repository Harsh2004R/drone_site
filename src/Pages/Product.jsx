import React from 'react'
import { Box } from '@chakra-ui/react'
import Navbar from '../Components/Navbar'
import InitialVideo from '../ProductComponents/InitialVideo'
import IndustrialDesign from '../ProductComponents/IndustrialDesign'


function Product() {
    return (
        <>
            <Navbar />

            <InitialVideo />
            <IndustrialDesign />

        </>
    )
}

export default Product
