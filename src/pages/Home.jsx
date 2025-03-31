import React from "react";
import Nav from "../components/Nav";
import ImageSlider from "../components/ImageSlider";
import Products from "../components/Products";
import Bannr from "../components/Bannr";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
export function Home() {
    return (
        <>
            <div>
            <Nav/>
            <ImageSlider/>
            <Products/>
            <Bannr/>
            <Contact/>
            <Footer/>
            </div>
        </>

    )
}
export default Home