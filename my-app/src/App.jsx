// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Cart from "./components/Cart.jsx";

// Componentes de páginas

import Home from "./pages/Home.jsx";
import About from "./components/About.jsx";
import Store from "./pages/Store.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <>
      <Header />
      <Cart />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<Store />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
