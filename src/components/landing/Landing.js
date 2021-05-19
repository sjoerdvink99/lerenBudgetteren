import React from "react";
import Navbar from "../Navbar";
import Header from "./Header";
import Product from "./Product";
import Pricing from "./Pricing";
import Contact from "./Contact";
import Footer from "../Footer";
import "./Landing.css";

export default function Landing() {
  return (
    <div className='landing'>
      <Navbar />
      <Header />
      <Product />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}
