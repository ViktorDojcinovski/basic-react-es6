import styled from "styled-components";

import DashboardMain from "../../components/DashboardMain/dashboard-main.component";
import DashboardMenu from "../../components/dashboard-menu.component";

export const StyledDashboardMain = styled(DashboardMain)``;

export const StyledDashboardMenu = styled(DashboardMenu)`
  width: 150px;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
`;

export const LogOutBtn = styled.button`
  position: absolute;
  bottom: 20px;
  width: 100px;
  margin-left: 50%;
  transform: translate(-50%, 0);
  background-color: black;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
`;
