import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";

const Button = ({ onClick, children, type }) => {
  return (
    <S.Button className="button" onClick={onClick} type={type}>
      {children}
    </S.Button>
  );
};

Button.defaultProps = {
  type: "primary",
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
};

export default Button;
