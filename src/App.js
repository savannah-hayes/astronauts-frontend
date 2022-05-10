import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Documentation from "./components/Documentation";
import Astronauts from "./components/Astronauts";
import Search from "components/Search";
import Missions from "components/Missions";
import Statuses from "components/Statuses";
import Years from "components/Years";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Documentation />} />
        <Route path="/astronauts" element={<Astronauts />} />
        <Route path="/search" element={<Search />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/statuses" element={<Statuses />} />
        <Route path="/years" element={<Years />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
