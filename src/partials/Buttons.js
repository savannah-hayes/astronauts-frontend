import React from "react";

import {
  ButtonContainer,
  Button
} from "../styled-components/styles";

const Buttons = ({ page, setPage }) => {
  return (
    <ButtonContainer>
      {page > 1 && <Button onClick={() => setPage(page - 1)}>&#171; &nbsp; previous</Button>}
      {page < 7 && <Button onClick={() => setPage(page + 1)}>next &nbsp; &#187;</Button>}
    </ButtonContainer>
  );
};

export default Buttons;