import React from "react";
import Home from "./pages/Home";
import XorO from "./pages/XorO";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function HomeApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/xoro" element={<XorO />} />
      </Routes>
    </BrowserRouter>
  );
}

export default HomeApp;
