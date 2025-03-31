import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from '../pages/About'
import Home from '../pages/Home';
import Furnitures from '../pages/Furnitures';
import Blog from '../pages/Blog';
import Contact_us from '../pages/Contact_us';
import LoginPage from '../pages/LoginPage';
const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/furnitures' element={<Furnitures/>} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact_us' element={<Contact_us/>} />
        <Route path='/login' element={<LoginPage/>} />
    </Routes>
</BrowserRouter>
  )
}

export default AppRoutes
