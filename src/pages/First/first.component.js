import React, { Component } from "react";

import addNewProp from "../../hocs/simple.hoc";

class First extends Component {
  constructor(props) {
    console.log("consturctor");
    super(props);

    this.state = {
      simpleText: "simpleText",
    };
  }

  getSnapshotBeforeUpdate() {
    return {}; // --> snapshot
  }

  shouldComponentUpdate(prevProps, prevState) {
    return false;
  }

  componentDidMount() {
    this.setState({ simpleText: "changed text" });
    console.log("componentDidMount");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate");
  }

  render() {
    console.log("render");
    return (
      <>
        <div>{this.state.simpleText}</div>
        <p>{this.props.newProp}</p>
      </>
    );
  }
}

export default addNewProp(First);
