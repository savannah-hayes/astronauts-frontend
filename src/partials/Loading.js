import React from "react";

import { Grid } from "react-loader-spinner";

import {
  GridContainer
} from "../styled-components/styles";

const Loading = () => {
  return (
    <GridContainer>
      <Grid color="#00BFFF" height={80} width={80} ariaLabel="loading-indicator" />
    </GridContainer>
  );
};

export default Loading;