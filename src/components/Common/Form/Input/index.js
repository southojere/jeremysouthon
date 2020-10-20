import React from "react";
import PropTypes from "prop-types";

import * as S from "./styles";

const Input = ({ value, placeholder, onChange }) => {
  return (
    <S.Input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    ></S.Input>
  );
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Input;
