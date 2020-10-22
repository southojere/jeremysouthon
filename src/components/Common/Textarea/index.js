import React from "react";
import PropTypes from "prop-types";

import * as S from "./styles";

const Textarea = ({ value, onChange }) => {
  return <S.Textarea rows={3}></S.Textarea>;
};

Textarea.defaultProps = {};

Textarea.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Textarea;
