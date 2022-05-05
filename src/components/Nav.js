import React from "react";
import { Link } from "react-router-dom";

import {
  Navbar,
  NavListWrapper,
  NavList,
  NavItem
} from "../styled-components/styles";

// Active Astronauts, Management Astronauts, Former Astronauts

const navCategories = ["Homepage", "Search", "Missions", "Status", "Year"];

const Nav = () => {
  return (
    <Navbar>
      <Link to="/">Documentation</Link>
      <NavListWrapper>
        <NavList>
          {navCategories.map((category) => (
            <NavItem key={category}>{category}</NavItem>
          ))}
        </NavList>
      </NavListWrapper>
    </Navbar>
  );
};

export default Nav;