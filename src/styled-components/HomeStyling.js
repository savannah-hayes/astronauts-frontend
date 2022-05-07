import styled from "styled-components";

export const Container = styled.main`
  padding: 10px 20px 50px 10px;
`;

export const Header = styled.h1`
  text-align: center;
  color: #14418c;
`;

export const SubHeader = styled.h2`
  text-align: center;
  text-decoration: underline;
  margin-top: 50px;
`;

export const Example = styled.p`
  margin-bottom: 30px;

  margin-top: ${props => props.top ? "35px" : "0px"};
`;

export const ParameterTable = styled.table`
  text-align: center;
  border-collapse: collapse;
  width: 100%;

  &:last-child {
    border-bottom: 4px solid #ddd;
  };
`;

export const ParameterTr = styled.tr`
  padding: 8px;
`;

export const ParameterTd = styled.td`
  border: 2px solid #ddd;
  padding: 8px;
  
  &:first-child {
    width: 4%
  }

  &:nth-child(2){
    width: 13%
  }

  &:nth-child(3){
    width: 10%
  }

  &:nth-child(4){
    width: 73%
  }
`;