import styled from "@emotion/styled";

const Button = styled.button`
  /* Reset default styles */
  background: none;
  border: 1px solid black;
  padding: 10px 10px;
  ${({ type }) =>
    type === "secondary" &&
    `
    border: none;
  `}
  cursor: pointer;
`;

export { Button };
