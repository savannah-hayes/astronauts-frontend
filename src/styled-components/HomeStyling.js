import styled from "styled-components";

export const Container = styled.main`
  padding: 10px 20px 50px 10px;
`;

export const Table = styled.table`
  text-align: center;
  border-collapse: collapse;
  width: 100%;

  &:last-child {
    border-bottom: 4px solid #ddd;
  };
`;

export const List = styled.tr`
  padding: 8px;

`;

export const Item = styled.td`
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