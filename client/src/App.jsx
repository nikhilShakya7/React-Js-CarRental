import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CarDetail from "./pages/CarDetail";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<Home />} />
        <Route path="/CarDetail/:id" element={<CarDetail />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
