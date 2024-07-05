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
import AdminSide from '../Admin/AdminSide.jsx'
import Clint from '../Admin/Clint.jsx'
import Product_Info from '../Pages/Product_Info.jsx'
import Add_to_cart from '../Pages/Add_to_cart.jsx'
import Cart from '../Pages/Cart.jsx'
function AllRoutes() {
    return (
        <>
            <AuthContextProvider>

                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/abc" element={
                        <PrivateRoute>
                            <Product />
                        </PrivateRoute>
                    } ></Route>

                    <Route path="/signup" element={<Signup />} ></Route>
                    <Route path="/login" element={<Login />} />
                    <Route path="/buy" element={<BuyPage />} />
                    <Route path="/buy/:id" element={<Product_Info />} />
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

                    <Route path="clint" element={<Clint />} />
                    <Route path="/add_to_cart/:id" element={<Add_to_cart />} />
                     <Route path="/cart" element={<Cart />} />
                    {/*  <Route path="pro" element={<ProductSpecsSection />} /> */}
                    {/*  <Route path="pro" element={<ProductSpecsSection />} /> */}
                    {/*  <Route path="pro" element={<ProductSpecsSection />} /> */}
                    {/*  <Route path="pro" element={<ProductSpecsSection />} /> */}
                    {/*  <Route path="pro" element={<ProductSpecsSection />} /> */}
                    {/*  <Route path="pro" element={<ProductSpecsSection />} /> */}
                    {/*  <Route path="pro" element={<ProductSpecsSection />} /> */}
                    {/*  <Route path="pro" element={<ProductSpecsSection />} /> */}
                    {/*  <Route path="pro" element={<ProductSpecsSection />} /> */}

                    <Route path="/admin" element={<AdminSide />} />
                </Routes>
            </AuthContextProvider>

        </>
    )
}

export default AllRoutes
