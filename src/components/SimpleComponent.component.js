import React, { Component } from "react";

import SimpleForm from "./SimpleForm.component";
import SimpleDisplay from "./SimpleDisplay.component";

export default class SimpleComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      simpleText: "some text extended",
    };
  }

  onChange = (e) => {
    this.setState({ simpleText: e.target.value });
  };

  render() {
    return (
      <>
        <SimpleForm text={this.state.simpleText} onChange={this.onChange} />
        <SimpleDisplay text={this.state.simpleText} />
      </>
    );
  }
}
