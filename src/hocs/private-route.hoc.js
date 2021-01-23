import React from "react";
import { Route, Redirect } from "react-router-dom";

export default ({ component: Component, ...rest }) => {
  return (
    <Route
      path={rest.path}
      render={(props) => {
        return (
          <>
            {sessionStorage.getItem("logged") ? (
              <Component {...props} />
            ) : (
              <Redirect to="/login" />
            )}
          </>
        );
      }}
    />
  );
};
