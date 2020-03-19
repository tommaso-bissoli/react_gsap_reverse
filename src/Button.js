// REACT
import React from "react";

// STYLED COMPONENTS
import styled from "styled-components";

// Typing
import PropTypes from "prop-types";

// Main Component
const Button = props => {
  return (
    <button className={props.className} onClick={e => props.onClick()}>
      <span>{props.label}</span>
    </button>
  );
};

// Typing
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
};

// Default
Button.defaultProps = {
  onClick: Function,
  label: "Clicca"
};

// Styled component
const Styled = styled(Button)`
  background: black;
  border: none;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  display: ${props => (props.display ? props.display : "inline-block")};
  font-size: 15px;
  outline: none;
  padding: 5px;
  text-transform: uppercase;
  width: ${props => (props.width ? props.width : "auto")};

  & > * {
    display: block;
    text-align: center;
  }
`;

// Exports
export default Styled;
