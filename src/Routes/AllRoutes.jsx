import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import ProductSpecsSection from '../Components/ProductSpecsSection '
import Product from '../Pages/Product'
function AllRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="pro" element={<ProductSpecsSection />} />
                <Route path="product" element={<Product />} />
                {/* <Route path="pro" element={<ProductSpecsSection />} />
                <Route path="pro" element={<ProductSpecsSection />} />
                <Route path="pro" element={<ProductSpecsSection />} />
                <Route path="pro" element={<ProductSpecsSection />} />
                <Route path="pro" element={<ProductSpecsSection />} />
                <Route path="pro" element={<ProductSpecsSection />} /> */}
                
            </Routes>
        </>
    )
}

export default AllRoutes
