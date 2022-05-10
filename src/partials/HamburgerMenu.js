import React from "react";

import { 
  Menu, 
  ItemOne,
  ItemTwo,
  ItemThree
} from "../styled-components/styles"

const HamburgerMenu = ({ isOpen }) => {
  return (
    <Menu>
      <ItemOne isOpen={isOpen} />
      <ItemTwo isOpen={isOpen} />
      <ItemThree isOpen={isOpen} />
    </Menu>
  );
};

export default HamburgerMenu;