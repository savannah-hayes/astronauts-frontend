import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "components/Nav";
import Home from "./components/Home";
import About from "./components/About";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import {
//   AppContainer
// } from "./styles";

const App = () => {
  return (
    <>
      <Nav />
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
};

export default App;
