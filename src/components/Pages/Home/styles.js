import styled from "@emotion/styled";
import { breakpoints } from "../../../../public/styles/theme";

const TitleSection = styled.section`
  height: 100vh;

  h1:not(:first-child) {
    margin-top: 1rem;m
  }
`;
const WorkSection = styled.section`
  height: 100vh;
`;

const Header = styled.h1`
  font-size: 4.375em;
  font-weight: 400;
  margin: 0;
  line-height: 1em;
  .line {
    display: block;
  }

  @media (max-width: ${breakpoints.desktop}px) {
    font-size: 2.5em;
  }
`;

export { Header, TitleSection, WorkSection };
