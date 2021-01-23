import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "./pages/Login/login.component";
import Dashboard from "./pages/Dashboard/dashboard.component";
import MainMenu from "./components/main-menu.component";
import ErrorBoundary from "./errorBoundary.component";
import PrivateRoute from "./hocs/private-route.hoc";

import "./index.css";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      buggyProperty: undefined,
      simpleText: "simpleText",
    };
  }

  onChange = (e) => {
    this.setState({ simpleText: e.target.value });
  };

  render() {
    return (
      <>
        <ErrorBoundary>
          <MainMenu className="ph7" />
          <Switch>
            <Route path="/login" component={Login} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
          </Switch>
        </ErrorBoundary>
      </>
    );
  }
}

export default App;
