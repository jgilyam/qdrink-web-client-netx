import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    100: "#312e2e",
    200: "#743621",
    300: "#191312",
    400: "#7e756f",
    500: "#cfa12c",
    600: "#321511",
    700: "#71553b",
    800: "#FFFFFF",
    900: "#FDD901",
    1000: "#870700",
    1100: "#000000",
  },
};

const qDrinkTheme = extendTheme({ colors });

export default qDrinkTheme;
