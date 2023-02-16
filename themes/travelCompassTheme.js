import { createTheme } from "@rneui/themed";

const themePalette = {
  primary: "#0081A7",
  secondary: "#00AFB9",
  highlight: "#F07167",
  darker: "#151515",
  dark: "#3B3B3B",
  grey: "#EAEAEA",
};

export const travelCompassTheme = createTheme({
  components: {
    Button: (buttonProps) => ({
      buttonStyle: {},
      titleStyle: {},
      disabledStyle: {},
      icon: {},
      type: "clear",
    }),
    Text: {
      style: {
        color: "#3B3B3B",
        fontSize: 20,
        lineHeight: 28,
      },
      h2Style: {
        color: themePalette.darker,
        fontWeight: "700",
        fontSize: 32,
        lineHeight: 40,
      },
    },
  },
});
