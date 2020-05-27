import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { secondaryBackgroundColor, textColor } from "../../components/Theme";

const StyledListTitleButton = styled.button`
  flex-grow: 1;
  padding: 10px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  background: ${secondaryBackgroundColor};
  color: ${textColor};
  font-size: 14px;
  border: none;
  cursor: pointer;
  border-top-left-radius: 3px;
  font-size: 1.2em;
`;

const ListTitleButton = ({ text, ...props }) => {
  return <StyledListTitleButton {...props}>{text}</StyledListTitleButton>;
};

ListTitleButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ListTitleButton;
