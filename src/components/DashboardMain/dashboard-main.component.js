import React, { useContext } from "react";

import { DashboardContext } from "../../contexts/dashboard.context";
import { StyledButton, StyledWrapper } from "./dashboard-main.styles";

export default function DashboardMain({ ...props }) {
  const dc = useContext(DashboardContext);

  return (
    <StyledWrapper {...props}>
      <StyledButton color="red" /> <StyledButton color="green" />
    </StyledWrapper>
  );
}
