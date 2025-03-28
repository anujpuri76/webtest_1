import React from "react";
import './App.css';
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Products from "./components/Products";
import ImageSlider from "./components/ImageSlider";
import Contact from "./components/Contact";
import Bannr from "./components/bannr";
import CardsD from "./components/CardsD";
function App() {
  return (
    <div className="App">
      <First />
    </div>
  );
}

function First() {
  return (
    <>
      <div>
        <Nav />
        <ImageSlider/>
        <Products/>
        <Bannr/>
        <CardsD/>
        <Contact/>
        <Footer />  
      </div>
    </>

  )
}

export default App
