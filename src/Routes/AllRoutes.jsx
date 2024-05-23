import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Product from '../Pages/Product'
import Signup from '../Pages/Signup'
import Login from '../Pages/Login'
import BuyPage from '../Pages/BuyPage'
import CameraDrone from '../BuysComponents.jsx/CameraDrone'
function AllRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product" element={<Product />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/buy" element={<BuyPage />} />
                <Route path="/buy/camera_drones" element={<CameraDrone />} />

                {/* <Route path="pro" element={<ProductSpecsSection />} />
                <Route path="pro" element={<ProductSpecsSection />} />
                <Route path="pro" element={<ProductSpecsSection />} />
                <Route path="pro" element={<ProductSpecsSection />} /> */}

            </Routes>
        </>
    )
}

export default AllRoutes
