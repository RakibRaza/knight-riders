import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core";
export const theme = createMuiTheme({
  typography: {
    fontFamily: "'Montserrat', sans-serif",
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
