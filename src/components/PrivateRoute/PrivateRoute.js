import React from "react";
import { Redirect, Route } from "react-router";
import { useAuthContext } from "./context/AuthContext";

function PrivateRoute({ children, ...rest }) {
  const { currentUserInfo } = useAuthContext();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        currentUserInfo ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
// const PrivateRoute = ({ component: Component, ...rest }) => {
//   const { currentUserInfo } = useAuthContext();

//   return (
//     <Route
//       {...rest}
//       render={(props) => {
//         return currentUserInfo ? (
//           <Component {...props} />
//         ) : (
//           <Redirect to="/login" />
//         );
//       }}
//     ></Route>
//   );
// };

export default PrivateRoute;
