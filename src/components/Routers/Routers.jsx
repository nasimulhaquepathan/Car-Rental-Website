import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "../pages/About";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import CartDetails from "../pages/CartDetails";
import CartListing from "../pages/CartListing";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cars" element={<CartListing />} />
      <Route path="/cars/:slug" element={<CartDetails />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
