import styled from "styled-components";

export const Header = styled.caption`
  text-align: center;
  color: #14418c;
  font-weight: 700;
  font-size: 32px;
  margin: 30px 0;
`;

export const MissionsTable = styled.table`
  text-align: center;
  border-collapse: collapse;
  width: 100%;

  &:last-child {
    border-bottom: 4px solid #ddd;
  };
`;

export const MissionsTr = styled.tr`
  padding: 8px;
`;

export const MissionsTd = styled.td`
  border: 2px solid #ddd;
  padding: 8px;
  
  &:first-child {
    width: 13%
  }

  &:nth-child(2){
    width: 15%
  }

  &:nth-child(3){
    width: 10%
  }

  &:nth-child(4){
    width: 31%
  }

   &:nth-child(4){
    width: 31%
  }
`;