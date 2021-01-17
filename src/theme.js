import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#222222'
    },
    secondary: {
      main: '#F7A046',
      contrastText: '#5D93FF'
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fafafa'
    }
  }
});

export default theme;