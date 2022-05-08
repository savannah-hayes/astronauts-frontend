import React from "react";

import { ParameterTr, ParameterTd } from "../styled-components/HomeStyling";

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