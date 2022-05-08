import styled from "styled-components";

export const MissionsTable = styled.table`
  text-align: center;
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 60px;

  &:last-child {
    border-bottom: 4px solid #ddd;
  };
`;

export const Header = styled.caption`
  text-align: center;
  color: #14418c;
  font-weight: 700;
  font-size: 32px;
  margin: 30px 0;
`;

export const MissionsTr = styled.tr`
  padding: 8px;
`;

export const MissionsTd = styled.td`
  border: 2px solid #ddd;
  padding: 8px;
  
  &:first-child {
    width: 15%
  }

  &:nth-child(2){
    width: 30%
  }

  &:nth-child(3){
    width: 5%
  }

  &:nth-child(4){
    width: 25%
  }

   &:nth-child(5){
    width: 25%
  }
`;