import React from "react";

const DashboardContext = React.createContext();

class DashboardContextProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "red",
    };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor(color) {
    this.setState({ color });
  }

  render() {
    return (
      <DashboardContext.Provider
        value={{ color: this.state.color, changeColor: this.changeColor }}
      >
        {this.props.children}
      </DashboardContext.Provider>
    );
  }
}

export { DashboardContextProvider, DashboardContext };
