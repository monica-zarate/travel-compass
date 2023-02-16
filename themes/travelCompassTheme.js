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
      h2Style: {
        color: themePalette.primary,
      },
    },
  },
});
