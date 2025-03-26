import React from "react";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Products from "./components/Products";
import ImageSlider from "./components/ImageSlider";
import Contact from "./components/Contact";
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
        <Header />
        <Nav />
        <ImageSlider/>
        <Products/>
        <Contact/>
        <Footer />
      </div>
    </>

  )
}

export default App
