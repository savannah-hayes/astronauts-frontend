import React from "react";

import { ParameterTr, ParameterTd } from "../styled-components/HomeStyling";
import { MissionsTr, MissionsTd } from "../styled-components/MissionsStyling";

export const renderParameterData = (parameters) => {
  return parameters.map((parameter) => {
    const { id, query, options, description } = parameter;

    return (
      <ParameterTr key={id}>
        <ParameterTd>{id}</ParameterTd>
        <ParameterTd>{query}</ParameterTd>
        <ParameterTd>{options}</ParameterTd>
        <ParameterTd>{description}</ParameterTd>
      </ParameterTr>
    );
  });
};

export const renderMissionsData = (missionsData) => {
  return missionsData.map((data) => {
    const { mission, shuttle, crew, duration, launch_pad } = data;

    return (
      <MissionsTr key={mission}>
        <MissionsTd>{mission}</MissionsTd>
        <MissionsTd>{shuttle}</MissionsTd>
        <MissionsTd>{crew}</MissionsTd>
        <MissionsTd>{duration}</MissionsTd>
        <MissionsTd>{launch_pad}</MissionsTd>
      </MissionsTr>
    );
  });
};