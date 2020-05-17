import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Home from "../Home";
import Board from "../Board";
import Header from "../../components/Header";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    overflow-x: auto;
    color: rgb(46, 68, 78);
    min-height: 100vh;
    font-family: Helvetica Neue, Arial, Helvetica, sans-serif;
  }
  a:-webkit-any-link {
    text-decoration: none;
    text-decoration-color: none;
    color: rgb(46, 68, 78);
  }
  :focus {
    outline: none;
  }
`;

const Routes = () => (
  <React.Fragment>
    <GlobalStyle />
    {/* <Header /> */}
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/board/:boardId" component={Board} />
      </Switch>
    </Router>
  </React.Fragment>
);

export default Routes;
