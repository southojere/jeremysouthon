import React from "react";
import PropTypes from "prop-types";

import * as S from "./styles";

const Input = ({ value, placeholder, onChange, rightIcon }) => {
  return (
    <S.InputWrapper>
      <S.Input placeholder={placeholder} value={value} onChange={onChange} />
      <S.Right>{rightIcon && rightIcon}</S.Right>
    </S.InputWrapper>
  );
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Input;
