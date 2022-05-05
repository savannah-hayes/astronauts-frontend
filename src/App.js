import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Documentation from "./components/Documentation";
import Astronauts from "./components/Astronauts";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Documentation />} />
        <Route path="/astronauts" element={<Astronauts />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
