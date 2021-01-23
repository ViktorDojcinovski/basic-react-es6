import styled from "styled-components";

import Button from "../CustomButton/custom-button.component";

export const StyledWrapper = styled.div`
  margin-left: 250px;
`;

export const StyledButton = styled(Button)`
  border: none;
  margin: 10px;
  padding: 10px 20px;
  border-radius: 10px;
  box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.2);
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
`;
