import PropTypes from "prop-types";
import React from 'react';
import './button.css';

interface ButtonObj{
  text: string,
  clicked?: any,
}

function Button({ text, clicked }:ButtonObj) {
    return (
    <button onClick={clicked}>{text}</button>        
    );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Button;
