import theme from "styled-theming";

export const primaryBackgroundColor = theme("mode", {
  light: "#fff",
  dark: "#222831",
});

export const textColor = theme("mode", {
  light: "#000",
  dark: "#fff",
});

export const secondaryBackgroundColor = theme("mode", {
  light: "#f8f8f8",
  dark: "#2d4059",
});

export const ternaryBackgroundColor = theme("mode", {
  light: "rgb(46,68,78)",
  dark: "#ff5722",
});

export const quaternaryBackgroundColor = theme("mode", {
  light: "#ccc",
  dark: "rgb(51, 191, 255);",
});
