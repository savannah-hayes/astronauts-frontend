import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import HamburgerMenu from "partials/HamburgerMenu";

import {
  NavContainer,
  NavWrapper,
  Hamburger
} from "../styled-components/styles";

const navTitles = ["Astronauts", "Search", "Missions", "Statuses", "Years"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHamburger = () => {
    setIsOpen(!isOpen)
  };

  return (
    <NavContainer>
      <Link to="/" className="link">Documentation</Link>
      <NavWrapper isOpen={isOpen} >
      {navTitles.map((title) => (
        <NavLink 
          to={`/${title}`.toLowerCase()} 
          key={title}
          className="linkStyle">{title}
        </NavLink>
      ))}
      </NavWrapper>
      <Hamburger onClick={toggleHamburger}>
        <HamburgerMenu isOpen={isOpen} />
      </Hamburger>
    </NavContainer>
  );
};

export default Navbar;