import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {FaGithub} from 'react-icons/fa';

const Wrapper = styled.div`
  height: 50px;
  background-color: black;
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

const Header = () => {
  return (
    <Wrapper>
      <HomeLink to="/">
        <HomeLinkLogo>
          <span role="img" aria-label="task">
            Task Manager
          </span>
        </HomeLinkLogo>
      </HomeLink>
      <GithubLink href="https://github.com/AkashBadhe/Task-Management-App.git" target="_blank">
        <FaGithub size={20} />
      </GithubLink>
    </Wrapper>
  );
};

export default Header;
