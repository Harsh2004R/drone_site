import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from "./PrivateRoute"
import Home from '../Pages/Home'
import Product from '../Pages/Product'
import Signup from '../Pages/Signup'
import Login from '../Pages/Login'
import BuyPage from '../Pages/BuyPage'
import CameraDrone from '../BuysComponents.jsx/CameraDrone'
import AuthContextProvider from '../Contexts/AuthContextProvider'
import HandHeld from '../BuysComponents.jsx/HandHeld'
import Quiz from '../Pages/Quiz.jsx'
import Page2 from '../QuizComponents/Page2.jsx'
import Page3 from '../QuizComponents/Page3.jsx'
import Page4 from '../QuizComponents/Page4.jsx'
function AllRoutes() {
    return (
        <>
            <AuthContextProvider>

                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/product" element={
                        <PrivateRoute>
                            <Product />
                        </PrivateRoute>
                    } ></Route>

                    <Route path="/signup" element={<Signup />} ></Route>
                    <Route path="/login" element={<Login />} />
                    <Route path="/buy" element={<BuyPage />} />
                    <Route path="/buy/camera_drones" element={
                        <PrivateRoute>
                            <CameraDrone />
                        </PrivateRoute>
                    } />



                    <Route path="/buy/handheld" element={<HandHeld />} />
                    <Route path="/quiz" element={<Quiz />} />
                    <Route path="/page2" element={<Page2 />} />
                    <Route path="/page3" element={<Page3 />} />
                     <Route path="/page4" element={<Page4 />} />
                    {/*  <Route path="pro" element={<ProductSpecsSection />} /> */}
                    {/*  <Route path="pro" element={<ProductSpecsSection />} /> */}
                    {/*  <Route path="pro" element={<ProductSpecsSection />} /> */}
                    {/*  <Route path="pro" element={<ProductSpecsSection />} /> */}
                    {/*  <Route path="pro" element={<ProductSpecsSection />} /> */}
                    {/*  <Route path="pro" element={<ProductSpecsSection />} /> */}
                    {/*  <Route path="pro" element={<ProductSpecsSection />} /> */}
                    {/*  <Route path="pro" element={<ProductSpecsSection />} /> */}
                    {/*  <Route path="pro" element={<ProductSpecsSection />} /> */}
                    {/*  <Route path="pro" element={<ProductSpecsSection />} /> */}
                    {/*  <Route path="pro" element={<ProductSpecsSection />} /> */}
                    {/*  <Route path="pro" element={<ProductSpecsSection />} /> */}
                    {/*  <Route path="pro" element={<ProductSpecsSection />} /> */}


                </Routes>
            </AuthContextProvider>

        </>
    )
}

export default AllRoutes
