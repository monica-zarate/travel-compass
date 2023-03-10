import { createTheme } from "@rneui/themed";

// I'm making use of a colour palette to style some components that are used across the application, like Button, Text & Inputs.
const themePalette = {
  primary: "#0081A7",
  secondary: "#00AFB9",
  highlight: "#F07167",
  darker: "#151515",
  dark: "#3B3B3B",
  grey: "#EAEAEA",
  white: "#ffffff",
};

export const travelCompassTheme = createTheme({
  components: {
    Button: () => ({
      buttonStyle: {
        raised: true,
        borderRadius: 5,
        backgroundColor: themePalette.highlight,
        elevation: 3,
        borderColor: themePalette.highlight,
      },
      titleStyle: {
        color: themePalette.white,
      },
    }),
    Text: {
      style: {
        color: themePalette.dark,
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
    Icon: {
      style: {
        raised: true,
      },
    },
    Input: {
      containerStyle: {
        paddingHorizontal: 16,
        borderColor: themePalette.grey,
        borderWidth: 1,
        borderRadius: 5,
        height: 48,
        marginBottom: 24,
      },
      inputContainerStyle: {
        borderBottomWidth: 0,
      },
      inputStyle: {
        color: themePalette.dark,
      },
    },
  },
});
