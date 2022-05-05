import styled from "styled-components";

export const GridContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

export const Navbar = styled.header`
  padding: 20px;
  color: white;
  background-color: #252931;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavList = styled.ul`
  display: flex;
  margin-right: 15px;
`;

export const NavItem = styled.li`
  margin-right: 5px;
  padding: 10px 15px;
  cursor: pointer;

  &:not(:last-child) {
    border-right: 1px solid grey;
  }
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

export const ButtonContainer = styled.div`
  margin: 50px 0;
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 18px;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;

  &:first-child {
    margin-right: 30px;
  };
`;