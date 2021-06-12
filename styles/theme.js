import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      light: "#80cbc4",
      main: "#4db6ac",
      dark: "#4db6ac",
      contrastText: "#212121",
    },
    secondary: {
      light: "#e0f2f1",
      main: "#b2dfdb",
      dark: "#b2dfdb",
      contrastText: "#212121",
    },
    error: {
      main: red.A400,
    },
    background: {
      paper:"#616161"
    },
    
  },
});

export default theme;
