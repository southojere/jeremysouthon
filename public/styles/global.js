import React from "react";
import { css } from "@emotion/core";
import theme from "./theme";

const globalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Lobster&display=swap");
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700;900&display=swap');
  body {
    background: ${theme.colors.backgroundYellow};
    font-family: "Poppins", sans-serif;
  }

  ul {
    margin:0;
    padding:0;
    list-style: none;
  }

  h1,h2,h3,h4 {
    font-weight: normal;
    margin:0;
  }
`;

export default globalStyles;
