const RELATIVE_UNIT_BASE = 16;

export const breakpoints = {
  phone: 480,
  tablet: 768,
  laptop: 960,
  desktop: 1152,
  widescreen: 1440,
};

const theme = {
  baseline: RELATIVE_UNIT_BASE,
  //   fonts: {
  //     CircularStdBook: 'Circular Std Book, sans-serif',
  //     CircularStdBold: 'Circular Std Bold, sans-serif',
  //     Helvetica: 'Helvetica, sans-serif',
  //   },
  colors: {
    backgroundYellow: "#feefc3",
    black: "#000000",
    overlay: "rgba(0, 0, 0, 0.5)",
    error: "#F5435F",
    success: "#28a745",
  },
};

export default theme;
