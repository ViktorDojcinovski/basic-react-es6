import React, { useContext } from "react";

import { DashboardContext } from "../contexts/dashboard.context";

export default function DashboardMenu(props) {
  const dc = useContext(DashboardContext);

  return (
    <div
      style={styles.mainWrapper}
      style={{ backgroundColor: dc.color }}
      {...props}
    >
      {props.children}
    </div>
  );
}

const styles = {
  mainWrapper: {
    width: "200px",
    height: "100vh",
  },
};
