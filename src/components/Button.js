import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const StyledButton = styled.button`
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  outline: 0;
  background-color: transparent;
  width: 100px;
  height: 30px;
  border-radius: 4px;
  border: 1px solid #CE93D8;
  text-align: center;
  color: #CE93D8;
  box-shadow: 0 2px 1px 0 rgba(0,0,0,0.1);

  &:hover{
    transition: 0.4s;
    box-shadow: 0px 1px 6px 0px rgba(0,0,0,0.3);
  }
`;

const Button = (props) => {
  const { children } = props;
  return (
    <StyledButton {...props}>
      {children}
    </StyledButton>
  )
}


Button.defaultProps = {
  type: "button",
};

Button.propTypes = {
  onClick: PropTypes.func,
  style: PropTypes.object,
  type: PropTypes.string,
  children: PropTypes.any,
}

export default Button;
