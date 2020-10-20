import { Global } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";
import globalStyles from "../public/styles/global";
import theme from "../public/styles/theme";
import Page from "../src/components/Page";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Page>
        <Global styles={globalStyles} />
        <Component {...pageProps} />
      </Page>
    </ThemeProvider>
  );
}

export default MyApp;
