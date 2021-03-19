import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core";
export const theme = createMuiTheme({
  typography: {
    fontFamily: "'Montserrat', sans-serif",
  },
  palette: {
    background: {
      default: "#fff",
    },
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: "capitalize",
        fontWeight: "bold",
      },
    },
  },
});
