import { createTheme } from "@mui/material";
import { grey, red } from "@mui/material/colors";

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
  components: {
    MuiAppBar: {
      defaultProps: {},
      styleOverrides: {
        root: {
          backgroundColor: "#4a148c",
        },
      },
    },
    MuiTextField: {
      defaultProps: { size: "small", variant: "filled" },
      styleOverrides: {},
    },
  },
});

