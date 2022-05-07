import styled from "styled-components";

export const GridContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

export const NavContainer = styled.header`
  padding: 20px;
  background-color: #252931;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavWrapper = styled.div`
  display: flex;
  margin-right: 15px;
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
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
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