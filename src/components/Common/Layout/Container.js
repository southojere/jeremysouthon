import styled from "@emotion/styled";
import React from "react";
import { breakpoints } from "../../../../public/styles/theme";

const StyledContainer = styled.div`
  width: 1560px;
  min-width: 1560px;
  margin: 0 auto;
  height: 100%;
  @media (max-width: ${breakpoints.widescreen}px) {
    width: 1153px;
    min-width: 1153px;
  }
  @media (max-width: ${breakpoints.desktop}px) {
    width: 961px;
    min-width: 961px;
  }
  @media (max-width: ${breakpoints.laptop}px) {
    width: 767px;
    min-width: 767px;
  }
  @media (max-width: ${breakpoints.tablet}px) {
    width: 481px;
    min-width: 481px;
  }
  @media (max-width: ${breakpoints.phone}px) {
    width: 320px;
    min-width: 320px;
  }
`;

const Container = (props) => {
  return <StyledContainer>{props.children}</StyledContainer>;
};
export default Container;
