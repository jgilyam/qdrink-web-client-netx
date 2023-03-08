import { createTheme } from "@mui/material";
import { grey, red } from "@mui/material/colors";
import { transform } from "typescript";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: grey[600],
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    button: {
      textTransform: 'none'
    }
  },
  components: {
    MuiAppBar: {
      defaultProps: {},
      styleOverrides: {
        root: {
          // backgroundColor: "#4a148c",
          backgroundColor: "primary",
        },
      },
    },
    MuiTextField: {
      defaultProps: { size: "small", variant: "filled" },
      styleOverrides: {},
    },
  },
});

