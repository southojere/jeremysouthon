import styled from "@emotion/styled";

const Input = styled.input`
  all: unset;
  border-bottom: 1px solid black;
  width: 100%;
`;

const InputWrapper = styled.div`
  position: relative;
  display: inline-flex;
`;

const Right = styled.div`
  position: absolute;
  right: 0;
`;

export { Input, InputWrapper, Right };
