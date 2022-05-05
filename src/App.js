import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Astronauts from "./components/Astronauts";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/astronauts" element={<Astronauts />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
