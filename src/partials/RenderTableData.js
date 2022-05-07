import React from "react";

import {
  List,
  Item
} from "../styled-components/HomeStyling";

export const queryParametersOne = [
  {
    id: 1, query: "status", options: "optional",
    description: "Returns a filtered list of astronauts that includes their status."
  },
  {
    id: 2, query: "mission", options: "optional",
    description: "Returns a filtered list of astronauts based on the missions they have been on."
  },
  {
    id: 3, query: "gender", options: "optional",
    description: "Returns a filtered list of astronauts based on female or male astronauts."
  },
  {
    id: 4, query: "major", options: "optional",
    description: "Returns a filtered list of astronauts based on the undergraduate major they studied."
  },
  {
    id: 5, query: "graduateMajor", options: "optional",
    description: "Returns a filtered list of astronauts based on the graduate major they studied."
  },
];

export const queryParametersTwo = [
  {
    id: 1, query: "gender", options: "optional",
    description: "Returns a filtered list of astronauts based on female or male astronauts."
  },
  {
    id: 2, query: "group", options: "optional",
    description: "Returns a filtered list of astronauts based on their astronaut group"
  },
  {
    id: 3, query: "spaceFlights", options: "optional",
    description: "Returns a filtered list of astronauts based on the number of space flights they have been on."
  },
  {
    id: 4, query: "spaceHours", options: "optional",
    description: "Returns a filtered list of astronauts based on the number of hours during space flight they have been on."
  },

  {
    id: 5, query: "spaceWalks", options: "optional",
    description: "Returns a filtered list of astronauts based on the number of space walks they have been on."
  },
  {
    id: 6, query: "walksHours", options: "optional",
    description: "Returns a filtered list of astronauts based on the number of hours during space walks they have been on."
  },
];

export const renderTableData = (parameters) => {
  return parameters.map((parameter) => {
    const { id, query, options, description } = parameter;
    
    return (
      <tbody key={id}>
        <List>
          <Item>{id}</Item>
          <Item>{query}</Item>
          <Item>{options}</Item>
          <Item>{description}</Item>
        </List>
      </tbody>
    );
  });
};