import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Home from "../Home";
import Board from "../Board";
import Header from "../../components/Header";
import { primaryBackgroundColor, textColor } from "../../components/Theme";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${primaryBackgroundColor};
    color: ${textColor};
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

const Routes = ({toggleTheme, darkMode}) => (
  <Router>
    <React.Fragment>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} darkMode={darkMode} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/board/:boardId" component={Board} />
      </Switch>
    </React.Fragment>
  </Router>
);

export default Routes;
