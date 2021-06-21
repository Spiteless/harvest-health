import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FF8F8F",
    },
    secondary: {
      main: "#5ABAA7",
    },
    dark: {
      main: grey[900]
    },
    light: {
      main: grey[50]
    }
  },
});

export default theme;