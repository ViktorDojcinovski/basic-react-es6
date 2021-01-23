import React from "react";
import { useHistory } from "react-router-dom";

import { DashboardContextProvider } from "../../contexts/dashboard.context";

import {
  StyledDashboardMenu,
  StyledDashboardMain,
  LogOutBtn,
} from "./dashboard.styles";

export default function Dashboard() {
  const history = useHistory();
  return (
    <DashboardContextProvider>
      <StyledDashboardMenu>
        <LogOutBtn
          onClick={() => {
            sessionStorage.removeItem("logged");
            history.push("/login");
          }}
        >
          Log out
        </LogOutBtn>
      </StyledDashboardMenu>
      <StyledDashboardMain />
    </DashboardContextProvider>
  );
}
