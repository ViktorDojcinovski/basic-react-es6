import React from "react";

const addNewProp = (WrappedComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        newProp: "newPropValue",
      };
    }

    render() {
      return <WrappedComponent newProp={this.state.newProp} {...this.props} />;
    }
  };
};

export default addNewProp;
