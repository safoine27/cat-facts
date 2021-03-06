import PropTypes from 'prop-types';
import React from 'react';
import './button.css';

interface ButtonObj {
  text: string;
  clicked?: () => void;
}

const Button: React.FC<ButtonObj> = ({ text, clicked }: ButtonObj) => {
  return <button onClick={clicked}>{text}</button>;
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
