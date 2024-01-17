import React from 'react'
import { Box } from '@chakra-ui/react'
import Navbar from '../Components/Navbar'
import InitialVideo from '../ProductComponents/InitialVideo'
import IndustrialDesign from '../ProductComponents/IndustrialDesign'
import Flight_system from '../ProductComponents/Flight_system'
import Imaging_system from '../ProductComponents/Imaging_system'
import Video_transmission from '../ProductComponents/Video_transmission'


function Product() {
    return (
        <>
            <Navbar />

            <InitialVideo />
            <IndustrialDesign />
            <Flight_system/>
            <Imaging_system/>
            <Video_transmission/>

        </>
    )
}

export default Product
