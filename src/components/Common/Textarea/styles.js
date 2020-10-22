import styled from "@emotion/styled";
import { breakpoints } from "../../../../public/styles/theme";

const Textarea = styled.textarea`
  font-size: 1.25em;
  resize: none;
  @media (max-width: ${breakpoints.laptop}px) {
    font-size: 1em;
  }
`;

export { Textarea };
