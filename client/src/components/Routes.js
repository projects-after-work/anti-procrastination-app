import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";

// pages
import Home from "../pages/Home.jsx";
import Sample from "../pages/Sample.jsx";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="sample" element={<Sample />} />
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
