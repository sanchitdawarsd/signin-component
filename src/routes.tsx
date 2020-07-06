import React, { Component, ReactNode } from "react";
import { Redirect, Switch } from "react-router";
import { Route } from "react-router-dom";
import styled from "styled-components";
import { Box } from "rebass";
import SigninView from "./views/signin";
import Header from "./components/header";
import Profile from "./views/profile";
import Dashboard from "./views/dashboard";
import authFallback from "./components/route/authFallback";
import Footer from "./components/footer";
import signin from "./views/signin";

export const Body = styled(Box)`
  position: relative;
  overflow-x: hidden;
  min-height: 100%;
  padding-bottom: 6rem;
`;

const ProfileFallback = authFallback(Profile, () => (
  <Redirect to={"/signin"} />
));

const DashboardFallback = authFallback(Dashboard, () => (
  <Redirect to={"/signin"} />
));

class Routes extends Component {
  render(): ReactNode {
    return (
      <Body>
        <Route component={Header} />
        <Switch>
          <Route exact={true} key="route-home" path="/" component={signin} />
          {/*Pages*/}
          {/* <Route key="route-about" path="/about" component={PagesView} /> */}
          {/*Items*/}
          {/* <Route
            key="route-items"
            path="/items/:address([0-9a-fA-f]{35})"
            component={Browse}
          /> */}
          {/* <Route key="route-items" path="/items" component={Browse} />
          <Route
            key="route-item"
            path="/item/:assetId([0-9a-fA-f]{42,44})"
            component={ItemView}
          />

          {/*User*/}
          <Route key="route-signin" path="/signin" component={SigninView} />
          {/* <Route
            key="route-profile"
            path="/profile"
            component={ProfileFallback}
          /> */}
          {/*Game*/}
          {/* <Route
            key="route-dashboard"
            path="/dashboard"
            component={DashboardFallback}
          /> */}
          {/*Not found*/}
          {/* <Redirect from="*" to="/" /> */} */}
        </Switch>
        <Route component={Footer} />
      </Body>
    );
  }
}
export default Routes;
