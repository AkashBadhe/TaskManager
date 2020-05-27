import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { ternaryBackgroundColor } from "../Theme";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

const Wrapper = styled.div`
  height: 50px;
  background-color: ${ternaryBackgroundColor};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.1rem;
  color: white;
`;

const HomeLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const HomeLinkLogo = styled.div`
  font-family: fantasy;
  font-size: 2rem;
  padding: 4px;
  color: white;
`;

const GithubLink = styled.a`
  color: white !important;
  height: 50px;
  width: 17px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:hover,
  &:focus,
  &:active {
    opacity: 0.8;
  }
`;

const Header = ({ toggleTheme, darkMode }) => {
  return (
    <Wrapper>
      <HomeLink to="/" id="homeLink">
        <HomeLinkLogo>
          <span role="img" aria-label="task" id="logo">
            Task Manager
          </span>
        </HomeLinkLogo>
      </HomeLink>
      {/* <div className="radio">
        <label>
          <input type="checkbox" checked={darkMode} onChange={toggleTheme} />
          Enable Dark Mode
        </label>
      </div> */}
      <FormControlLabel
        control={
          <Switch
            checked={darkMode}
            onChange={toggleTheme}
            name="checkedB"
            color="primary"
          />
        }
        label="Enable Dark Mode"
      />
      <GithubLink
        id="githubLink"
        href="https://github.com/AkashBadhe/TaskManager"
        target="_blank"
      >
        <FaGithub size={20} />
      </GithubLink>
    </Wrapper>
  );
};

export default Header;
