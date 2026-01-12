import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme,
} from "@react-navigation/native";

export const LightTheme = {
  ...DefaultTheme,

  colors: {
    ...DefaultTheme.colors,
    primary: "#3B82F6",
    background: "#FFFFFF",
    text: "#000000",
  },
};

export const DarkTheme = {
  ...NavigationDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    primary: "#2563EB",

    background: "#0B0B0B",

    text: "#FFFFFF",
  },
};
