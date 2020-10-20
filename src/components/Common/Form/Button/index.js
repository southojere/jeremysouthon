import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";

const Button = ({ onClick, children }) => {
  return (
    <S.Button className="button" onClick={onClick}>
      {children}
    </S.Button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
