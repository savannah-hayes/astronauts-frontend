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
  width: ${props => props.wide ? "28%" : "20%"};
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
  padding: 13px 30px;
  border: none;
  border-radius: 5px;

  &:first-child {
    padding: 13px;
    margin-right: 30px;
    border-radius: 5px 0 0 5px;
    border-right: 1px solid #9c9c9c;
  }

  &:last-child {
    padding: 13px;
    border-radius: 0 5px 5px 0;
    border-left: 1px solid #9c9c9c;
  }
`;