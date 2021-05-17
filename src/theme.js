import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#4F87FB",
    },
    secondary: {
      main: "#F25438",
    },
    background: {
      default: "#F3F3F3",
    },
  },
});

export default theme;
