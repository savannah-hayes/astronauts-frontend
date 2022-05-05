import React from "react";
import { Link } from "react-router-dom";

import {
  Navbar,
  NavList,
  NavItem
} from "../styled-components/styles";

// Active Astronauts, Management Astronauts, Former Astronauts

const navCategories = ["Homepage", "Search", "Missions", "Status", "Year"];

const Nav = () => {
  return (
    <Navbar>
      <Link to="/" className="link">Documentation</Link>
      <NavList>
        {navCategories.map((category, index) => (
          <NavItem key={category}>{category}</NavItem>
        ))}
      </NavList>
    </Navbar>
  );
};

export default Nav;