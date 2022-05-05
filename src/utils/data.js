import React from "react";

import {
  List,
  Item
} from "../styled-components/HomeStyling"

export const queryParametersOne = [
  {
    id: 1, query: "name", options: "optional",
    description: "Returns a filtered list of astronauts that includes the name of the astronaut."
  },
  {
    id: 2, query: "status", options: "optional",
    description: "Returns a filtered list of astronauts that includes their status (Active, Retired, Deceased..)"
  },
  {
    id: 3, query: "mission", options: "optional",
    description: "Returns a filtered list of astronauts that includes the missions they have been on."
  },
  {
    id: 4, query: "gender", options: "optional",
    description: "Returns a filtered list of astronauts that includes female or male astronauts."
  },
  {
    id: 5, query: "major", options: "optional",
    description: "Returns a filtered list of astronauts that includes the undergraduate major they studied."
  },
  {
    id: 6, query: "graduateMajor", options: "optional",
    description: "Returns a filtered list of astronauts that includes the graduate major they studied."
  },
];

export const queryParametersTwo = [
  {
    id: 1, query: "gender", options: "optional",
    description: "Returns a filtered list of astronauts that includes female or male astronauts."
  },
  {
    id: 2, query: "group", options: "optional",
    description: "Returns a filtered list of astronauts that includes the group of the astronaut."
  },
  {
    id: 3, query: "spaceFlights", options: "optional",
    description: "Returns a filtered list of astronauts that includes the number of space flights they have been on."
  },
  {
    id: 4, query: "spaceHours", options: "optional",
    description: "Returns a filtered list of astronauts that includes the number of hour during space flight they have been on."
  },

  {
    id: 5, query: "spaceWalks", options: "optional",
    description: "Returns a filtered list of astronauts that includes the number of space walks they have been on."
  },
  {
    id: 6, query: "walksHours", options: "optional",
    description: "Returns a filtered list of astronauts that includes the number of hour during space walks they have been on."
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
    )
  })
};