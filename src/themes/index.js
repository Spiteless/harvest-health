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
  utils: {
    backgroundFocus: ({ratio, bg, box = 50}) => (
      `${((bg + (50 - box) / ratio - 50) * (ratio / (ratio - 1)) + 50) * 1}%`
    )
  }
}
);



export default theme;