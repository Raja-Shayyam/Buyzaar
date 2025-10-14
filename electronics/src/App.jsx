import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyNavbar from "../Components/Navbar";
import Footer from "../Components/footer";
import ProductGrid from "../d-Pages/product";
import BrandsPage from "../d-Pages/brand";
import HomeSection from "../d-Pages/home";
import AboutSection from "../d-Pages/about";
import CartSection from "../d-Pages/Cart";
import CheckoutSection from "../d-Pages/CheckoutDETAILS";
import  Singup  from "../d-Pages/singup";
import LoginPage from "../d-Pages/login";
import ProductDetails from "../d-Pages/ProductDetails";

function App() {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<HomeSection />} />
        <Route path="/singup" element={<Singup />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/product" element={<ProductGrid />} />
        <Route path="/ProductDetails" element={<ProductDetails />} />
        <Route path="/brand" element={<BrandsPage />} />
        <Route path="/offer" element={<h1>Offers</h1>} />
        <Route path="/cart" element={<CartSection />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/CheckDetails" element={<CheckoutSection />} />
        <Route path="/support" element={<h1>support</h1>} />
        <Route path="/contact" element={<h1>Contact Page</h1>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
