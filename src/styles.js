import styled from "styled-components";

// export const AppContainer = styled.div`
//   display: flex;
// `;

export const Navbar = styled.header`
  padding: 20px;
  color: white;
  background-color: #252931;
  display: flex;
  justify-content: center;
`;

export const NavList = styled.ul`
  display: flex;
`;

export const NavItem = styled.li`
  margin-right: 5px;
  padding: 12px;
  cursor: pointer;
  border-right: 1px solid grey;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 15px;
  padding: 50px;
`;

export const Header = styled.h1`
  text-align: center;
  color: #14418c;
  margin-bottom: 0;
`;

export const Card = styled.div`
  border: 1px solid black;
  padding: 15px;
  width: 20%;
`;

export const SubHeader = styled.h2`
  margin-top: 0;
`;