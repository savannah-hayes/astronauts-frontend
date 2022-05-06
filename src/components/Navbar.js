import React from "react";
import { Link, NavLink } from "react-router-dom";

import {
  NavContainer,
  NavWrapper
} from "../styled-components/styles";

const navTitles = ["Home", "Search", "Missions", "Status", "Year"];

const Navbar = () => {
  return (
    <NavContainer>
      <Link to="/" className="link">Documentation</Link>
      <NavWrapper>
      {navTitles.map((title) => (
        <NavLink 
          to={`/${title}`} 
          key={title}
          className="linkStyle">{title}
        </NavLink>
      ))}
      </NavWrapper>
    </NavContainer>
  );
};

export default Navbar;