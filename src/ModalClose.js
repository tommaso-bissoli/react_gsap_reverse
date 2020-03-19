// REACT
import React from 'react';

// STYLED COMPOENTS
import styled from 'styled-components/macro';

// Components
import Button from './Button';

// Main component
const ModalClose = props => {
  return(
    <Button
      className={props.className}
      label="X"
      onClick={e => props.onClick(e)}
    />
  );
}

const Styled = styled(ModalClose)`
  position: absolute;
  right: 10px;
  top: 10px;
  box-sizing: border-box;
  background: transparent;
  border: 1px solid #ccc;
  color: black;
  padding: 3px 5px;
`;

// Exports
export default Styled;
