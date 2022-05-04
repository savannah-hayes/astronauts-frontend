import React from "react";

import {
  Navbar,
  NavList,
  NavItem
} from "../styles";

// Active Astronauts, Management Astronauts, Former Astronauts

const navCategories = ["Homepage", "Search", "Missions", "Status", "Year"];

const Nav = () => {
  return (
    <Navbar>
      <NavList>
        {navCategories.map((category) => (
          <NavItem key={category}>{category}</NavItem>
        ))}
      </NavList>
    </Navbar>
  );
};

export default Nav;