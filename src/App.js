import React from "react";
import {BrowserRouter, Redirect, Switch, Route} from "react-router-dom";

import Home from "./pages/Home";
import NearBy from "./pages/NearBy";
import Register from "./pages/Register";
import Search from "./pages/Search";
import Payment from "./pages/Payment";
import LoginContainer from "./components/LoginContainer/index";

export function PrivateRoute({children, ...rest}) {
  const isAuthenticated = true;
  return (
    <Route
      {...rest}
      render={({location}) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: {from: location}
            }}
          />
        )
      }
    />
  );
}

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Switch>
          <Route path="/login" component={LoginContainer} />
          <PrivateRoute path="/">
            <Route path="/nearby" component={NearBy} />
            <Route path="/register" component={Register} />
            <Route path="/search" component={Search} />
            <Route exact path="/" component={Home} />
            <Route path="/payment" component={Payment} />
          </PrivateRoute>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
