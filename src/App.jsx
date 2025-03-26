import React from "react";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Products from "./components/Products";
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
        <Products/>
        <Footer />
      </div>
    </>

  )
}

export default App
