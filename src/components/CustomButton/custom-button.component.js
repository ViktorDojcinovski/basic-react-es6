import React from "react";
import { DashboardContext } from "../../contexts/dashboard.context";

import { StyledButton } from "./custom-button.styles";

class CustomButton extends React.Component {
  render() {
    return (
      <DashboardContext.Consumer>
        {(dc) => (
          <StyledButton
            onClick={() => dc.changeColor(this.props.color)}
            loggedIn={false}
            {...this.props}
          >
            Change to {this.props.color}
          </StyledButton>
        )}
      </DashboardContext.Consumer>
    );
  }
}

export default CustomButton;
